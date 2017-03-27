var nodemailer		= require('nodemailer');


var algorithm 		= 'demographics';
var options 		= {};


var message 		= 'We detected someone!';


if (typeof matrix.config.settings.email === 'undefined' ){
	matrix.send({ message: 'Please, configure your email' });
	matrix.led("blue").render();
} else {
	matrix.led("yellow").render();
	setTimeout(function() {
		matrix.led('black').render();
	}, 2000);
	matrix.service(algorithm).start().then(function(payload){
		var email 			= matrix.config.settings.email.replace(/\//g, ".");
		matrix.led("green").render();

		setTimeout(function() {
		   matrix.led('black').render();
		}, 2000);
		var transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: 'admolizetest@gmail.com',
		        pass: 'tapioca123'
		    }
		});

		var mailOptions = {
		    from: 		'"Intruders detector" <admolizetest@gmail.com>',
		    to: 		email,
		    subject: 	'Hello ✔',
		    text: 		message,
		    html: 		'<b>' + message + '</b>'
		};

		transporter.sendMail(mailOptions, function (error, info) {
		    if (error)
		        return console.log(error);
		    console.log('Message %s sent: %s', info.messageId, info.response);
		});
		matrix.send({ message: message });
	});
}

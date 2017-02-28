var message 		= 'We detected someone!';
var nodemailer	= require('nodemailer');

var algorithm 		= 'face';
var options 		= {};

if (matrix.config.settings.email === 'undefined' ){
	matrix.send({ message: 'Please, configure your email' });
} else {
	matrix.init(algorithm, options).then(function(data){

		matrix.led("green").render();

		var transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: 'admolizetest@gmail.com',
		        pass: 'tapioca123'
		    }
		});

		var mailOptions = {
		    from: 		'"Intruders detector" <admolizetest@gmail.com>',
		    to: 		matrix.config.settings.email,
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

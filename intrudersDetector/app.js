var nodemailer		= require('nodemailer');
var jimp 			= require('jimp');


var algorithm 		= 'demographics';
var options 		= {};

var email 			= matrix.config.settings.email.replace(/\//g, ".");
var message 		= 'We detected someone!';


if (typeof matrix.config.settings.email === 'undefined' ){
	matrix.send({ message: 'Please, configure your email' });
} else {
	matrix.init(algorithm, options).then(function(payload){

		matrix.led("green").render();

		setTimeout(function() {
		   matrix.led('black').render();
		}, 2000);

		jimp.read(payload.image.data, function (err, image) {
		    image.resize(256, 256)            // resize
		         .quality(60)                 // set JPEG quality
		         .greyscale()                 // set greyscale
		         .write("test.jpg"); // save
		});

		console.log("JOSE**: ", payload.image.data);/*
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
		matrix.send({ message: message });*/
	});
}

const email 		= matrix.settings.email ? matrix.settings.email : '';
const message 		= 'We detected someone ';
const nodemailer	= require('nodemailer');

var algorithm 		= 'demographics';
var options 		= {};

if (email != '' ){
	matrix.send({message: 'Please, configure your email'});
	return;
};

matrix.init(algorithm, options).then(function(data){

	matrix.led("green").render();
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);

	let transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: 'admolizetest@gmail.com',
	        pass: 'tapioca123'
	    }
	});

	let mailOptions = {
	    from: 		'"Jones.Json" <admolizetest@gmail.com>',
	    to: 		email,
	    subject: 	'Hello ✔',
	    text: 		message,
	    html: 		'<b>' + message + '</b>'
	};

	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
});

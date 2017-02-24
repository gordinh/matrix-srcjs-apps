// app code goes here
// matrix.init()....
//
// have fun
matrix.led("red").render();
// Verificar horario
var algorithm = 'demographics';
var options = {};
const nodemailer = require('nodemailer');

matrix.init(algorithm, options).then(function(data){
	
	matrix.led("green").render();
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	    service: 'gmail',
	    auth: {
	        user: 'admolizetest@gmail.com',
	        pass: 'tapioca123'
	    }
	});

	// setup email data with unicode symbols
	let mailOptions = {
	    from: '"Fred Foo 👻" <admolizetest@gmail.com>', // sender address
	    to: 'carla.santana@admobilize.com', // list of receivers
	    subject: 'Hello ✔', // Subject line
	    text: 'Hello world ?', // plain text body
	    html: '<b>Hello world ?</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
});

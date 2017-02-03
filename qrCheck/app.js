// app code goes here
// matrix.init()....
//
// have fun


matrix.led('red').render();

matrix.init('camera').then(function(data){

	var QrCode = require('qrcode-reader');
	var qr = new QrCode();

	qr.callback = function(result,err) {
		if(result)
			console.log(result)
	}

	qr.decode(data);

	// fonte:https://www.npmjs.com/package/qrcode-reader

	// console.log('>>>>>>>>>>', data);
	// matrix.led('green').render();
	// setTimeout(function() {
	// 	matrix.led('black').render();
	// },2000);
});

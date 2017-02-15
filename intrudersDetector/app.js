// app code goes here
// matrix.init()....
//
// have fun

var RaspiCam = require("raspicam");

// Verificar horario
matrix.init('face').then(function(data){

  	console.log('>>>>>>>>>>', data);
  	var camera = new RaspiCam({
		mode: "photo",
		output: "./photo/image.jpg"+"time",
		encoding: "jpg",
		timeout: 0 // take the picture immediately
	});

	camera.on("start", function( err, timestamp ){
		console.log("photo started at " + timestamp );
	});

	camera.start();
});

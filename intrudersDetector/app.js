// app code goes here
// matrix.init()....
//
// have fun
matrix.led("red").render();
// Verificar horario
var algorithm = 'demographics';
var options = {};
matrix.init(algorithm, options).then(function(data){
	matrix.led("green").render();
	console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", data);
});

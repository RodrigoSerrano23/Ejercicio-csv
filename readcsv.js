var fs = require('fs');

fs.readFile('datos.csv', 'utf8', (err,data) => {
    if(err) throw err;

    var salto = data.split("\n");
    var cadena = "";
    for(var i=0; i < salto.length; i++){
        var line = salto[i].split(",");
        cadena += 'No. : '+ (i+1) + '\n' +
                  'No. Control: '+ line[0] + '\n' +
                  'Nombre: ' + line[1] + '\n' +
                  'Calificación: ' + line[2] + '\n\n'
    }
    console.log(cadena);
});
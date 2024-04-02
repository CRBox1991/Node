const fs = require("fs");

function writeAndRead(path,obj){

    fs.writeFile(path,JSON.stringify(obj), function(err){
        console.log(err)
        fs.readFile(path,(err, data)=> {
            if (err) {
            console.error(err)
            return
            }         
            console.log(JSON.parse(data)) // utilizo el metodo JSON.parce para convertir el buffer(tipo de dato) en su formato json
            })
        })

}

module.exports = {writeAndRead}

// writeAndRead(".miFichero.json", {"calle":"teruel", "numero":"8"})
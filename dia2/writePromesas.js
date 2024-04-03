const fs = require("fs/promises")


async function writeRead(path, obj){
fs.writeFile(path,JSON.stringify(obj))
    .then(() => {

        return fs.readFile(path)
    })
    .then(data => {
        console.log(JSON.parse(data)) // utilizo el metodo JSON.parce para convertir el buffer(tipo de dato) en su formato json
    })
    .catch(err => {
        console.log(err);
    })
}

async function writeRead2(path, obj){

    try{

    await fs.writeFile(path,JSON.stringify(obj))

    const nuevo = await fs.readFile(path)

    console.log(JSON.parse(nuevo))
    
    } catch(error){
        console.log(error);
    }

}


 module.exports = {writeRead, writeRead2}


        
        

const fs = require("fs")


let persona = {
    name:"Cristian",
    surname:"Redondo",
    age:33,
}
let filePath = ".\miPersona.json";

fs.writeFile(filePath,JSON.stringify(persona), function(err){
    console.log(err)
    fs.readFile(filePath,(err, data)=> {
        if (err) {
        console.error(err)
        return
        }         
        console.log(JSON.parse(data)) // utilizo el metodo JSON.parce para convertir el buffer(tipo de dato) en su formato json
        })
    }    
)
// RETO 3 






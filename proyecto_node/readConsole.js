const readline = require("readline")
const fs = require("fs")



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function readConsole(callback){
let filePath = ".\miPersona.json";
rl.question("nombre ", (name) => {
    rl.question("apellido ", (surname) => {
        rl.question("edad ",  (age) => {
        let persona ={
            name: name,
            surname : surname,
            age : age,
            };        
        rl.close();
        fs.writeFile(filePath,JSON.stringify(persona), function(err){
            console.log(err)
            fs.readFile(filePath,(err, data)=> {
                if (err) {
                console.error(err)
                return
                }         
                console.log(JSON.parse(data)) // utilizo el metodo JSON.parce para convertir el buffer(tipo de dato) en su formato json
                })
            });
    
        });    
    });   

});
}

readConsole(readConsole)

module.exports = {readConsole}
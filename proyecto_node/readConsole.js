const readline = require("readline")




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


function readConsole(callback){
rl.question("nombre ", (name) => {
    rl.question("apellido ", (surname) => {
        rl.question("edad ",  (age) => {
        let persona ={
            name: name,
            surname: surname,
            age: age,
            };        
        rl.close();
        return callback(persona)          
    
        });    
    });   

});
}

//readConsole(readConsole)

module.exports = {readConsole}
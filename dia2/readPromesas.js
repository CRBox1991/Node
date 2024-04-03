const readline = require("readline")

function pregunta(pregunta){
    const question = new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
            });
        rl.question(pregunta, (respuesta) =>{
            resolve(respuesta); 
            rl.close()                
        })        
    });
    return question
}

function readConsole(callback){
    let persona ={
        nombre:"",
        apellido:"",
        edad:"",
    }

    pregunta("nombre")
    .then((nombre) =>{
        persona.nombre = nombre
        return pregunta("apellido")       
    })
    .then((apellido) =>{
        persona.apellido = apellido
        return pregunta("edad")
    })
    .then((edad) =>{
        persona.edad = edad
        return callback(persona)
    })
    .catch(err =>{
        console.log(err);
    })
}

async function readConsole2(callback){
    let persona ={
        nombre:"",
        apellido:"",
        edad:"",
    }

    try{

        persona.nombre = await pregunta("nombre");
        persona.apellido = await pregunta("apellido");
        persona.edad = await pregunta("edad") 
        callback(persona)

    } catch(err){
        console.log(err);
    }    
}

module.exports = {readConsole, readConsole2}


   



console.log("Mensaje1");

setTimeout(function(){
    console.log("Mensaje2");

    setTimeout(function(){        
        console.log("Mensaje3");
    },0)

},3000)

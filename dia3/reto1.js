const express = require("express")
const app = express();

    app.get('/', function (req, res){

        console.log('peticion recibida del cliente')
        console.log('URL: '+ req.url)
        console.log('Method: '+ req.method)
        console.log('UserAgent: '+ req.headers['user-agent']);
        res.status(200).json({ ok:true,message:"Recibido!"})
        
    })

    app.get('/bye', function (req, res){
        res.status(200).json({"ok":true, "message": "Adios"})
    })


app.listen(3000)
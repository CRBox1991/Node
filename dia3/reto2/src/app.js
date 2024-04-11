const express = require("express");
const cors = require('cors');
const booksRouters = require("./routers/book.routers");
const errorHanding = require("./error/errorHandling")
const app = express();


app.set("port", process.env.PORT || 5000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(booksRouters);
app.use(function(req, res, next){

    res.status(400).json({
        error:true,
        codigo: 404,
        mesaage:"Endpoint doesnt found"
    })
})

app.use(errorHanding);

module.exports = app
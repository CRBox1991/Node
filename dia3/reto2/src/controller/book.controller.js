const Book = require("../models/Books");

let book = new Book('El Hobbit', 25.33, 1);

//let book = null;

function getStart(request, response){
    let respuesta = {error: false, codigo: 200, mensaje:'Punto de inicio'};
    response.send(respuesta);
}

function getBook(request, response){
    let respuesta;
if(book != null)
    respuesta = {error: false, codigo: 200, data: book}
else
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'}
response.send(respuesta);

}

function postBook(request, response){
    let respuesta;
    const{title, price, id} = request.body;
    console.log(request.body);
if(book === null){
    book = {
        title: title,
        price: price,
        id_book: id
    }

    respuesta = {error: false, codigo: 200,mensaje: 'Libro creado', data: book};
}
else 
    respuesta = {error: true, codigo: 200, mensaje: 'El libro ya existe', data: null}

    response.send(respuesta);
}

function putBook(request, response){
    let respuesta;
if(book != null){
    book.title = request.body.newTitle;
    book.price = request.body.newPrice;
    book.id_book = request.body.newId;
    respuesta = {error: false, codigo: 200,mensaje: 'Libro actualizado', data: book}
}
else 
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data: null};
    response.send(respuesta);
}

function deleteBook(request, response){
    let respuesta;
if(book !=null){
    book = null;
    respuesta = {error: false, codigo: 200, mensaje: 'El libro fue borrado', data:book}
}
else {
    respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data:book}
}
    response.send(respuesta)
}



module.exports = {getStart, getBook, postBook, putBook, putBook, deleteBook}
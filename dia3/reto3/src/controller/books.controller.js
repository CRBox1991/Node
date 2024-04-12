const Book = require('../models/Books')


let myBook1 = new Book("Caperucita Roja", "Tapa dura", "Charles Perrault", 13.99, "../../../assets/img/caperucita.jpeg",1)
let myBook2 = new Book("Los Tres Cerditos", "Tapa blanda", "Joseph Jacobs", 11.99, "../../../assets/img/cerditos.jpeg",2);
let myBook3 = new Book("La cenicienta", "Tapa dura", "Giambattista Basile", 9.99, "../../../assets/img/cenicienta.jpeg",3);

let myBooks = [ myBook1, myBook2, myBook3]  


function getStart(request, response){
    let respuesta = {error: false, codigo: 200, mensaje:'Punto de inicio'};
    response.send(respuesta);
}

function getBooks(request, response){
    
    let id = request.query.id_book
    let respuesta;

if(id != null){
    const libroFiltrado = myBooks.filter(book => book.id_book == id)
    console.log(libroFiltrado);
    respuesta = {error: false, codigo: 200, data: libroFiltrado}
} else { 
    console.log(myBooks);
    respuesta = {error: false, codigo: 200, data: myBooks}
    }
   response.send(respuesta) 

}

function postBook(request, response){

    let respuesta;
    const{title, price, author, type, photo, id_book} = request.body;
    console.log(request.body.id_book);    
        if(myBooks){
            newBook = {
                        title: title,
                        price: price,
                        author: author,
                        type: type,
                        photo: photo,
                        id_book: id_book                        
                    }
    myBooks.push(newBook)
    console.log(myBooks);

    respuesta = {error: false, codigo: 200,mensaje: 'Libro creado', data: myBooks};
    } else 
    respuesta = {error: true, codigo: 200, mensaje: 'El libro ya existe', data: null}

    response.send(respuesta);
    
}

function putBook(request, response){
    let respuesta;
    let editBook = myBooks.findIndex(book => book.id_book == request.body.id_book)
    //const{title, price, author, type, photo, id_book} = request.body;
    // for(let i = 0; i < myBooks.length; i++){
        if(editBook != -1){
        myBooks[editBook].title = request.body.title;
        myBooks[editBook].author = request.body.author
        myBooks[editBook].price = request.body.price;
        myBooks[editBook].type = request.body.type;
        myBooks[editBook].photo = request.body.photo;
    
            respuesta = {error: false, codigo: 200,mensaje: 'Libro actualizado', data: myBooks}
    }
        else {
            respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data: null};}
    
    
    response.send(respuesta);
    console.log(myBooks);
}

function deleteBook(request, response){
    let respuesta;
    for(let i = 0; i < myBooks.length; i++){
        if(myBooks[i].id_book == request.body.id_book){
            console.log(request.body.id_book);
            myBooks.splice(i,1);
            respuesta = {error: false, codigo: 200, mensaje: 'El libro fue borrado', data:myBooks}
            console.log(myBooks);
        }
        else {
            respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe', data:myBooks}
        }
    }
    response.send(respuesta)
    
}



module.exports = {getStart, getBooks, postBook, putBook, putBook, deleteBook}
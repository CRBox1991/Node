
class Book{  

    constructor(title, type, autor, precio, photo){
        this.title = title;
        this.type = type;
        this.author = autor;
        this.price = precio;        
        this.photo = photo;        
        this.id_book = 0;
        this.id_user= 0
    }

}

module.exports = Book
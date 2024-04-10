class Book{  

    constructor(title,type, autor, price, photo, id=0, userId=0){
        this.title = title;
        this.price = price;
        this.author = autor;
        this.photo = photo;
        this.type = type;
        this.id_book = id;
        this.id_user = userId
    }

}

module.exports = Book
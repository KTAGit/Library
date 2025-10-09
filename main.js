
class Book {
    constructor(title, author, pages, hasRead){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead
    }

    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "read" : "not read"}.`
    }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)

console.log(theHobbit.info())
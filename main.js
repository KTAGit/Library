// Array to store all book object
const myLibrary = []

// Book class to define the structure and behavior of a book
class Book {
    constructor(title, author, pages, hasRead) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.hasRead = hasRead;
            this.id = crypto.randomUUID();
    }

    info() {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "read" : "not read"}.`;
        }
}

// Function to create a new Book instance and add it to the library
function addBookToLibrary(title, author, pages, hasRead) {
    let newBook = new Book(title, author, pages, hasRead)
    myLibrary.push(newBook)
}


addBookToLibrary("Dune", "Frank Herbert", 412, false);


console.log(myLibrary);
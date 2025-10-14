const display = document.querySelector("#libraryDisplayList")
const buttonContainer = document.querySelector(".button-container")
const addButton = document.querySelector(".add-button")


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

// Function to display books from myLibrary
function displayBook(){
    
    display.innerHTML = ""

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i]

        const container = document.createElement("div")
        const bookCard = document.createElement("div")
        const title = document.createElement("h2")
        const author = document.createElement("p")
        const status = document.createElement("p")

        container.classList.add("container")
        bookCard.classList.add("book-card")
        author.classList.add("author")
        status.classList.add("status")

        title.textContent = `${book.title}`
        author.textContent = `By\n${book.author}`
        status.textContent = `${book.hasRead ? "Read" : "Not Read"}`
        //bookCard.textContent = `${book.title} by ${book.author}\n${book.pages} Pages\n${book.hasRead ? "Read" : "Not Read"}`;
        author.style.whiteSpace = "pre-line";


        bookCard.appendChild(title)
        bookCard.appendChild(author)
        bookCard.appendChild(status)
        display.appendChild(container)
        container.appendChild(bookCard)
    }
}

addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("Dune", "Frank Herbert", 412, false);
addBookToLibrary("Dune", "Frank Herbert", 412, false);

addButton.addEventListener("click", () => {
    
})

displayBook()
display.appendChild(buttonContainer)

console.log(myLibrary);
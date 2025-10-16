const display = document.querySelector("#libraryDisplayList")
const buttonContainer = document.querySelector(".button-container")
const addButton = document.querySelector(".add-button")
const bodyTint = document.querySelector(".body-tint")
const form = document.querySelector("#form")
const statusSwitch = document.querySelector(".switch-container")
const read = document.querySelector(".switch-right")
const notRead = document.querySelector(".switch-left")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const numberOfPages = document.querySelector("#pages")
const addBookBtn = document.querySelector(".add-book-btn")
const currentStatus = document.querySelector(".status")


let readStatus = false

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

    const fragment = document.createDocumentFragment();

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i]

        const container = document.createElement("div")
        const bookCard = document.createElement("div")
        const title = document.createElement("h2")
        const author = document.createElement("p")
        const status = document.createElement("p")
        const pageAmount = document.createElement("p")
        const removeBtn = document.createElement("div")

        container.classList.add("container")
        bookCard.classList.add("book-card")
        author.classList.add("author")
        status.classList.add("status")
        pageAmount.classList.add("number-of-pages")
        removeBtn.classList.add("remove-btn")

        title.textContent = `${book.title}`
        author.textContent = `By\n${book.author}`
        status.textContent = `${book.hasRead ? "Read" : "Not Read"}`
        pageAmount.textContent = `pp. ${book.pages}`
        removeBtn.textContent = "X"
        removeBtn.dataset.id = book.id
        status.dataset.id = book.id
        status.title = "Change Status"

        bookCard.appendChild(title)
        bookCard.appendChild(author)
        bookCard.appendChild(status)
        bookCard.appendChild(pageAmount)
        container.appendChild(bookCard)
        container.appendChild(removeBtn)

        fragment.appendChild(container)

        removeBtn.addEventListener("click", () => {
            const removeItem = removeBtn.dataset.id

            if (removeItem === myLibrary[i].id) {
                const index = myLibrary.indexOf(myLibrary[i])
                myLibrary.splice(index, 1)
                displayBook()
                display.appendChild(buttonContainer)
            }        
        })
        status.addEventListener("click", () => {

            if(status.dataset.id === myLibrary[i].id){
                if (myLibrary[i].hasRead === true){
                    myLibrary[i].hasRead = false
                    status.textContent = "Not Read"
                }else {
                    myLibrary[i].hasRead = true
                    status.textContent = "Read"
                }
            }
        })
    }
    display.appendChild(fragment)
}

// Toggle the book's read status when the user clicks the switch
statusSwitch.addEventListener("click", () => {

    const notReadBgColor = getComputedStyle(notRead).backgroundColor;

    if (notReadBgColor === "rgb(255, 255, 255)"){
        notRead.style.backgroundColor = "#16415A"
        notRead.style.color = "white"
        read.style.backgroundColor = "white"
        read.style.color = "#d7a13d"
        readStatus = true
    }
    else {
        notRead.style.backgroundColor = "white"
        notRead.style.color = "#d7a13d"
        read.style.backgroundColor = "#16415A"
        read.style.color = "white"
        readStatus = false
    }
})

// Show the form popup and clear previous input values when "Add Book" is clicked
addButton.addEventListener("click", () => {
    title.value = ""
    author.value = ""
    numberOfPages.value = ""
    bodyTint.classList.replace("off", "on");
    form.classList.replace("form-none", "form");
})

// Close the form popup when the background overlay is clicked
bodyTint.addEventListener("click", () => {
    bodyTint.classList.replace("on", "off");
    form.classList.replace("form", "form-none");
})

// Add the user's new book to the library and hide the form popup
addBookBtn.addEventListener("click", () => {
    if (title.value === "" || author.value === "" || numberOfPages.value === "") {
        return
    }else {
        addBookToLibrary(title.value, author.value, numberOfPages.value, readStatus);
        displayBook()
        bodyTint.classList.replace("on", "off");
        form.classList.replace("form", "form-none");
        display.appendChild(buttonContainer)
    }
    
})


display.appendChild(buttonContainer)


let myLibrary = [];


function Book(title, author, pages, read, content){

    this.title = title;
    this.author = author; 
    this.pages = pages; 
    this.read = read;
    this.content = content;

    this.info = function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${read? "read":"not read yet"}.`)
    }
}

function addBookToLibrary(book){
    let newBook = new Book(book.title, book.author, book.pages, book.read, book.content);
    myLibrary.push(newBook);

    myLibrary.forEach(book => {
        console.log(book);
    });
}


function ShelfContainer(shelf, books){
    this.shelf = shelf; 
    this.books = books;

    return {shelf, books}
}

let book = document.querySelector(".shelfcontent .book");  
let shelfarea = document.querySelector(".shelfarea");
let singleshelf = document.querySelector(".singleshelf");
let shelfContent = document.querySelector(".shelfcontent");
console.log(shelfContent);

shelfContent.querySelector(".book").remove();


let shelfArray = []; 
shelfArray[0] = new ShelfContainer(shelfContent,[]);
console.log(`test ${shelfArray[0].shelf}`);

for (let i = 0; i < 14; i++){
    let shelfclone = singleshelf.cloneNode(true);
    shelfarea.appendChild(shelfclone);
    shelfArray.push(new ShelfContainer(shelfclone,[]));
}

let addButton = document.querySelector(".add");

addButton.addEventListener('click', () =>{
    let newBookTitle = document.querySelector(".booktitle input");
    let newBookContent = document.querySelector(".bookpage textarea");
    let newBookAuthor = document.querySelector(".bookpage input");
    let newBookpages = parseInt(newBookContent.value.length /5); 


    let newBook = new Book(newBookTitle.value,newBookAuthor.value,newBookpages,false,newBookContent.value);


    for(let i = 0; i < shelfArray.length; i++){
        if(shelfArray[i].books.length > 2)continue; 

        shelfArray[i].books[shelfArray[i].books.length] = new Book(newBook.title,newBook.author,newBook.pages,newBook.read,newBook.content);

        let newBookClone = book.cloneNode(true); 
        let newBookPagesText = newBookClone.querySelector(".pagenumber");
        newBookPagesText.textContent = newBook.pages; 

        let newBookTitle = newBookClone.querySelector(".title p");
        newBookTitle.textContent = newBook.title;


        newBookClone.querySelector(".title").value = newBook.title;
        shelfArray[i].shelf.appendChild(newBookClone);

        return; 

    }



    addBookToLibrary(newBook);
})


function updateShelf(){

    for(let i = 0; i < shelfArray.length; i++){
        console.log(shelfArray.shelf);



    }


}



















const card = document.querySelector('.card');

const myLibrary = [{
    title : "GOT",
    author : "George R.R Martin",
    pages : 295,
    haveRead : true
},{
    title : "GO",
    author : "George R.R Martin",
    pages : 295,
    haveRead : true
},{
    title : "Ga",
    author : "George R.R Martin",
    pages : 295,
    haveRead : true
}];


function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(title, author, pages, haveRead){

    myLibrary.push(new Book(title, author, pages, haveRead));
}

function displayDefault(array){
    array.forEach(element => {
        createCard(element.title, element.author, element.pages, element.haveRead);
})}

function createCard(title, author, pages, haveRead){
    const div = document.createElement('div');
    div.classList.add('card');

    const titleElement = document.createElement('h4');
    titleElement.classList.add('title');

    const authorElement = document.createElement('p');
    authorElement.classList.add('author');

    const pagesElement = document.createElement('p');
    pagesElement.classList.add('pages');

    const haveReadElement = document.createElement('input');
    haveReadElement.type = 'checkbox';

    titleElement.textContent = title;
    authorElement.textContent = author;
    pagesElement.textContent = pages;
    haveReadElement.checked = haveRead;

    div.append(titleElement, authorElement, pagesElement, haveReadElement);
    document.body.append(div);
}

displayDefault(myLibrary);
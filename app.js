const container = document.querySelector('.card-container');
const addNew = document.querySelector('.add-new');
const closeButton = document.querySelector('svg');
const modal = document.querySelector('.modal');
const userTitle = document.querySelector('#title');
const userAuthor = document.querySelector('#author');
const userPages = document.querySelector('#pages');
const userHaveRead = document.querySelector('#have-read');
const submitButton = document.querySelector('.button-37');
const newBookForm = document.querySelector('form');

const myLibrary = [{
    title : "A Game of Thrones",
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

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const headerImage = document.createElement('img');
    headerImage.classList.add('header-image');
    headerImage.src = 'https://source.unsplash.com/random';

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');


    const titleElement = document.createElement('h4');

    const authorElement = document.createElement('p');
    authorElement.classList.add('author');

    const pagesElement = document.createElement('p');
    pagesElement.classList.add('pages');

    const sliderDiv = document.createElement('div');
    sliderDiv.className = "form-check form-switch";

    const haveReadElement = document.createElement('input');
    haveReadElement.type = 'checkbox';
    haveReadElement.id = 'flexSwitchCheckDefault';
    haveReadElement.className = 'form-check-input';

    const label = document.createElement('label');
    label.setAttribute('for', 'flexSwitchCheckDefault');
    label.textContent = "Read";
    label.className = "form-check-label";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete');
    deleteButton.className = "btn btn-danger"

    deleteButton.addEventListener('click', () => {
        container.removeChild(card);
    })

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('card-buttons');

    titleElement.textContent = title;
    authorElement.textContent = author;
    pagesElement.textContent = pages;
    haveReadElement.checked = haveRead;

    cardHeader.append(headerImage);
    sliderDiv.append(haveReadElement, label);
    buttonDiv.append(sliderDiv, deleteButton);
    cardBody.append(titleElement, authorElement, pagesElement, buttonDiv);
    card.append(cardHeader, cardBody);
    container.append(card);
}

addNew.addEventListener('click', () => {
    modal.classList.add('show');
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
})

newBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(userTitle.value === ''||userAuthor.value === '' ||userPages.value === '') return;
    createCard(userTitle.value, userAuthor.value, userPages.value, userHaveRead.value);
    modal.classList.remove('show');
    userTitle.value = '';
    userAuthor.value = '';
    userPages.value = '';
    userHaveRead.checked = false;
})

displayDefault(myLibrary);
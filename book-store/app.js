function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {
}

function Store() {
}

Store.prototype.getBooks = function (){
  let books = [];
  if (localStorage.getItem('books') !==null ){
    books = JSON.parse(localStorage.getItem('books'))
  }
  return books;
}

Store.prototype.addBook = function (book){
  const store = new Store()
  const books = store.getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books))
 
}

Store.prototype.removeBook = function (isbn){
  const store = new Store()
  const books = store.getBooks();
  books.forEach( (book,index) => {
    if (book.isbn === isbn) {
      books.splice(index, 1)
    }
  })
  localStorage.setItem('books', JSON.stringify(books))
}

Store.prototype.displayBooks = function () {
  const store = new Store()
  const ui = new UI()
  const books = store.getBooks();
  books.forEach (book => {
    ui.addBookToList(book)
  })
}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
  list.appendChild(row);
}

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  setTimeout(()=>{
    document.querySelector('.alert').remove();
  },3000);
  
}

UI.prototype.deleteBook = function (target){
  
  target.parentElement.parentElement.remove();  
}

document.addEventListener('DOMContentLoaded', ()=>{
  const store = new Store();
  store.displayBooks();
})

document.getElementById('book-form').addEventListener('submit', (e)=>{

  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();
  const store = new Store();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    store.addBook(book);
    ui.showAlert('Book was added!', 'success')
    ui.clearFields();
  };

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', (e)=> {
  
  const ui = new UI();
  const store = new Store();

  if(e.target.className === 'delete') {
    ui.deleteBook(e.target);
    store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    ui.showAlert('Book was deleted', 'success')
  }
 
  e.preventDefault();
})


document.addEventListener("DOMContentLoaded", function() {
    /***Global Variables */
    let booksList;
    /***Helper functions */
    function loopThroughBooks(){
        booksList.forEach(book => renderBook(book))
    }
    /***Events */
    function liEventListener(li){
        li.addEventListener('click', (e)=>{
            renderBookInfo(li)
        })
    }
    /***Render to DOM */
    function renderBook(book){
        const booksContainer = document.querySelector('ul#list')
        //create elements
        const li = document.createElement('li')
        //add text
        li.textContent = book.title;
        //append to DOM
        booksContainer.appendChild(li)
        liEventListener(li)
    }
    /***Fetch Request */
    function getBooks(){
        fetch('http://localhost:3000/books')
        .then(res => res.json())
        .then(books => {
            booksList = books
            loopThroughBooks()
        })
    }
    function renderBookInfo(li){
        //find the book obj of the title that was clicked on
        const liText = li.textContent
        const book = booksList.find(book => book.title === liText)
        //parent element to append info to

        //create elements

        //add texts

        //add attributes

        //append elements to DOM
    }
    /***Initialize */
    function init(){
        getBooks()
    }
    init()
});

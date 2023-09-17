document.addEventListener("DOMContentLoaded", function () {
    /***Global Variables */
    let booksList;
    /***Helper functions */
    function loopThroughBooks() {
        booksList.forEach(book => renderBook(book))
    }
    /***Events */
    function liEventListener(li) {
        li.addEventListener('click', (e) => {
            renderBookInfo(li)
        })
    }
    function clearDOM(parentContainer) {
        const parentChildren = Array.from(parentContainer.children)
        if(parentChildren.length){
            parentChildren.forEach(element => element.remove())
        }
    }
    /***Render to DOM */
    function renderBook(book) {
        const booksContainer = document.querySelector('ul#list')
        //create elements
        const li = document.createElement('li')
        //add text
        li.textContent = book.title;
        //append to DOM
        booksContainer.appendChild(li)
        liEventListener(li)
    }
    function renderBookInfo(li) {
        //parent element to append info to
        const bookInfoContainer = document.querySelector('div#show-panel')
        clearDOM(bookInfoContainer)
        //find the book obj of the title that was clicked on
        const liText = li.textContent
        const book = booksList.find(book => book.title === liText)
        const likesLiArray = book.users.map(user=>{
            const userLike = document.createElement('li')
            userLike.textContent = user.username
            return userLike
        })
       
        //create elements
        const img = document.createElement('img')
        const title = document.createElement('h2')
        const subTitle = document.createElement('h2')
        const author = document.createElement('h2')
        const description = document.createElement('p')
        const likeContainer = document.createElement('ul')
        //add texts
        title.textContent = book.title
        subTitle.textContent = book.subTitle
        author.textContent = book.author
        description.textContent = book.description
        //add attributes
        img.src = book.img_url
        //append elements to DOM
        bookInfoContainer.appendChild(img)
        bookInfoContainer.appendChild(title)
        bookInfoContainer.appendChild(subTitle)
        bookInfoContainer.appendChild(author)
        bookInfoContainer.appendChild(description)
        likesLiArray.forEach(element => likeContainer.appendChild(element))
        bookInfoContainer.appendChild(likeContainer)
    }
    /***Fetch Request */
    function getBooks() {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(books => {
                booksList = books
                loopThroughBooks()
            })
    }

    /***Initialize */
    function init() {
        getBooks()
    }
    init()
});

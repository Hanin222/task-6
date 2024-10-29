
async function fetchBooks() {
  try {
    const response = await fetch(
      "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
    );
    const books = await response.json();
    displayFeaturedBooks(books.slice(-4));
    displayPopularBooks(books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

// *************************Best Selling Book fetch******************************
async function fetchBestSellingBook() {
  try {
    const response = await fetch(
      "https://wolnelektury.pl/api/books/studnia-i-wahadlo/"
    );
    const bestSellingBook = await response.json();

    displayBestSellingBook(bestSellingBook);
  } catch (error) {
    console.error("Error fetching best selling book:", error);
  }
}

// ***********************************Featured Books*************************
function displayFeaturedBooks(books) {
  const featuredBooksList = document.getElementById("featured-books-list");
  books.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("col-md-3", "mb-4");
    bookItem.innerHTML = `
      <div class="card book-item h-100 text-center">
        <img src="${book.simple_thumb}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="book-title">${book.title}</h5>
          <p class="book-author">By ${book.author}</p>
        </div>
      </div>
     <div>
     
    `;
    featuredBooksList.appendChild(bookItem);
  });

  const viewButton = document.createElement("div");
  viewButton.innerHTML = `
    <div class="text-end mt-4">
     <a href="#" class="text-decoration-none text-black"> view all product
            <i class="fas fa-arrow-right"></i>
        </a>
    </div>
  `;
  featuredBooksList.appendChild(viewButton);
}

// **************************************Popular Books***************************
function displayPopularBooks(books) {
  const popularBooksList = document.getElementById("popular-books-list");

  books.slice(0, 8).forEach((book) => {
    console.log(book.image);
    const bookItem = document.createElement("div");
    bookItem.classList.add("col-md-3", "mb-4");
    bookItem.innerHTML = `
      <div class="card book-item h-100 text-center">
        <img src="${book.simple_thumb}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="book-title">${book.title}</h5>
          <p class="book-author">By ${book.author}</p>
        </div>
      </div>
    `;
    popularBooksList.appendChild(bookItem);
  });
}
// ********************************BestSellingBook*********************************************
function displayBestSellingBook(book) {
  const bestSellingBookInfo = document.getElementById("best-selling-book-info");
  const coverImage = book.cover; 
  const authors = book.authors; 
  const authorName = authors.length > 0 ? authors[0] : "Unknown Author"; 
  const bookTitle = book.title; 
  const description = book.fragment_data; 

bestSellingBookInfo.innerHTML = `
    <div class="row g-3 align-items-start">
      <div class="col-12 col-md-4 text-center text-md-start">
        <img src="${coverImage}" class="img-fluid" style="max-width: 100%; width: 350px;" alt="${bookTitle}">
      </div>
      <div class="col-12 col-md-8">
        <div class="text-center text-md-start">
          <h2 class="subs-title mb-2">
            Best Selling Books
          </h2>
          <div class="lin mx-auto mx-md-0"></div>
        </div>
        <p class="book-author">By Edger Allan Poe</p>
        <h3 class="book-title">${bookTitle}</h3>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nulla nec adipisicing elit.
          Ut nihil velit et sit quis voluptas aliquid turpis...</p>
        <a href="#" class="text-decoration-none text-black">
          Shop it Now
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
  fetchBestSellingBook();
});

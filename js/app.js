// 》STARTING JAVASCRIPT《
const loadData = () => {
  const searchField = document.getElementById("searchField"); // Selecting Search Input By DOM
  const searchText = searchField.value; // Take the value from Search Input
  const url = `https://openlibrary.org/search.json?q=${searchText}`; // API-JSON
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data.docs));
};

const displayBooks = (books) => {
  console.log(books);
  const booksContainer = document.getElementById("booksContainer");
  for (const book of books) {
    books.forEach((book) => {
      const bookDiv = document.createElement("div");
      const img = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      bookDiv.classList.add("col");
      bookDiv.innerHTML = `
    <div class="card h-100 text-dark">
    <img class="img-fluid" src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">ABCS</p>
          <button class="btn btn-success">Show Food Details</button>
      </div>
    </div>
    `;
      booksContainer.appendChild(bookDiv);
    });
  }
};

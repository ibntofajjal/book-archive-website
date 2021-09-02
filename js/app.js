// ㊋ █▒▒▒▒▒▒▒▒▒█ STARTING JAVASCRIPT █▒▒▒▒▒▒▒▒▒█ ㊋
const loadData = () => {
  const searchField = document.getElementById("searchField"); // Selecting Search Input By DOM
  const searchText = searchField.value; // Take the value from Search Input
  searchField.value = "";
  const url = `https://openlibrary.org/search.json?q=${searchText}`; // API-JSON
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data.docs));
};
//  █▒▒▒▒▒▒▒▒▒▶ DISPLAYING RESULS ◀▒▒▒▒▒▒▒▒▒█
const displayBooks = (books) => {
  // console.log(books);
  const booksContainer = document.getElementById("booksContainer");
  // Error Handling
  if (books.length === "" || books.length === 0) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = `
    <h1>Please type anythig first</h1>`;
    booksContainer.appendChild(h1);
  }

  booksContainer.textContent = ""; // Clear the previous result
  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    const img = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    bookDiv.classList.add("col");
    bookDiv.innerHTML = `
    <div class="card h-100 text-dark">
    <img class="img-fluid" src="${img}" class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">Book Name: <b>${book.title}</b></h5>
          <p class="card-text">Author Name: <b>${book.author_name[0]}</b></p>
          <p class="card-text">Author Alternativ Name: <b>${book.author_alternative_name[0]}</b></p>
          <p class="card-text">Book Publisher: <b>${book.publisher[0]}</b></p>
          <p class="card-text">First Publish Year: <b>${book.first_publish_year}</b></p>
      </div>
    </div>
    `;
    booksContainer.appendChild(bookDiv);
  });
};

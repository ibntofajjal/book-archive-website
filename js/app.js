//  █▒▒▒▒▒▒▒▒▒《 LOAD/FETCHING DATA FROM API 》▒▒▒▒▒▒▒▒▒█
const loadData = () => {
  // Selecting Search Input By DOM
  const searchField = document.getElementById("searchField");
  // Take the value from Search Input
  const searchText = searchField.value;
  searchField.value = "";

  // API-JSON
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBooks(data));
};

const displayBooks = (books) => {
  const api = books.docs;
  const booksContainer = document.getElementById("booksContainer");
  // Result Found
  const showResult = books.numFound;
  if (showResult === 0) {
    const displySearchResult = document.getElementById("result-found");
    // clear Data
    displySearchResult.textContent = "";
    const div = document.createElement("div");
    div.classList.add("h2");
    div.innerHTML = `Result Not Found <h3>${showResult}</h3> `;
    displySearchResult.appendChild(div);
  } else {
    const displySearchResult = document.getElementById("result-found");
    // clear Data
    displySearchResult.textContent = "";
    const div = document.createElement("div");
    div.classList.add("h2");
    div.innerHTML = `Ressult Found <h3>${showResult}</h3> `;
    displySearchResult.appendChild(div);
  }

  // Error Handling
  if (api.length === "" || api.length === 0) {
    const errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = `
    <h1 class="text-center">Please type a valid word</h1>`;
    booksContainer.appendChild(h1);
  } else {
    // Clear the previous error message
    errorMsg.innerHTML = ``;
    // Clear the previous result
    booksContainer.textContent = "";
    // Looping For Get The Book List Via Search result
    api.forEach((book) => {
      const bookDiv = document.createElement("div");
      const img = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      bookDiv.classList.add("col");
      bookDiv.innerHTML = `
      <div class="card h-100 text-dark">
      <img class="img-fluid" src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Book Name: <b>${book.title}</b></h5>
            <p class="card-text">Author Name: <b>${book.author_name[0]}</b></p>
            <p class="card-text">Book Publisher: <b>${book.publisher[0]}</b></p>
            <p class="card-text">First Publish Year: <b>${book.first_publish_year}</b></p>
        </div>
      </div>
      `;
      booksContainer.appendChild(bookDiv);
    });
  }
};

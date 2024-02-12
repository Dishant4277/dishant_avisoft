function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}

var id = 13120;

var Book1 = new Book(id++, "Atomic Habits", "James Clear");
var Book2 = new Book(id++, "King of Greed", "Ana Huang", false);
var Book3 = new Book(id++, "Mathematics", "R.D. Sharma");
let Library = [Book1, Book2, Book3];

function Book(id, title, author, borrowed = true) {
  this.id = id;
  this.title = title;
  this.author = author;
  if (borrowed) {
    this.isBorrowed = false;
  } else {
    this.isBorrowed = true;
  }
}

function handleAddBook(event) {
  event.preventDefault();
  let data = new FormData(event.target);
  let title = data.get("title");
  let author = data.get("author");
  if (title != "" && author != "") {
    let book = new Book(id++, title, author);
    Library.push(book);
    addResult.innerHTML = `<em><p style='color: #28a745;'>Congratulations!! ID: ${book.id}, ${title} by ${author} Book is added to the Library.</em></p>`;
    console.log(Library);
    availableBooks();
  } else {
    addResult.innerHTML =
      "<em><p style='color: #dc3545;'>Please enter author of the Book</p></em>";
  }
}

function search(op, value) {
  let isBook = false;
  switch (op) {
    case "id":
      value = parseInt(value);
      for (let book of Library) {
        if (book.id === value) {
          isBook = true;
          searchResult.innerHTML = `<em><h3>Results</h3> <p style='color: #28a745;'>Here is the Book you searched for: <br>ID: ${book.id}, ${book.title} By ${book.author}</p></em>`;
        }
      }
      if (!isBook) {
        searchResult.innerHTML =
          "<em><h3>Results</h3> <p style='color: #dc3545;'>Sorry!! This Book is not available.</p></em>";
      }
      break;

    case "title":
      for (let book of Library) {
        if (book.title === value) {
          isBook = true;
          searchResult.innerHTML = `<em><h3>Results</h3> <p style='color: #28a745;'>
            Here is the Book you searched for: <br>ID: ${book.id}, ${book.title} By ${book.author}</p></em>`;
        }
      }
      if (!isBook) {
        searchResult.innerHTML = `<em><h3>Results</h3> <p style='color: #dc3545;'>Sorry!! This Book is not available.</p></em>`;
      }
      break;

    case "author":
      for (let book of Library) {
        if (book.author === value) {
          isBook = true;
          searchResult.innerHTML = `<em><h3>Results</h3> <p style='color: #28a745;'>Here is the Book you searched for: <br>ID: ${book.id}, ${book.title} By ${book.author}</p></em>`;
        }
      }
      if (!isBook) {
        searchResult.innerHTML = `<em><h3>Results</h3> <p style='color: #dc3545;'>Sorry!! This Book is not available.</p></em>`;
      }
      break;

    default:
      searchResult.innerHTML =
        "<p style='color: #dc3545;'><em>Please select a search parameter</em></p>";
      break;
  }
}

function handleSearch(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const searchBy = data.get("search-by");
  let value = data.get("search");
  search(searchBy, value);
  clearInputs();
}

function availableBooks() {
  // Get the table and insert a new row at the end
  let table = document.getElementById("books-table");
  table.innerHTML =
    "<tr><th>ID</th><th>Book's Title</th><th>Book's Author</th><th>Status</th><th>Borrow / Return</th></tr>";

  // Insert data into cells of the new row
  for (let book of Library) {
    var newRow = table.insertRow(table.rows.length);
    newRow.insertCell(0).innerHTML = book.id;
    newRow.insertCell(1).innerHTML = book.title;
    newRow.insertCell(2).innerHTML = book.author;
    if (!book.isBorrowed) {
      newRow.insertCell(3).innerHTML = "Available";
      newRow.insertCell(4).innerHTML =
        "<button type='submit' class='btn tab-btn' onclick='update(this)' >Borrow</button>";
    } else {
      newRow.insertCell(3).innerHTML = "Borrowed";
      newRow.insertCell(4).innerHTML =
        "<button type='submit' class='btn tab-btn' onclick='update(this)'>Return</button>";
    }
  }
  clearInput();
}

function update(button) {
  // Get the parent row of the clicked button
  let row = button.parentNode.parentNode;

  let id = parseInt(row.cells[0].innerText);

  let title, author;

  for (let book of Library) {
    if (book.id === id && book.isBorrowed === false) {
      book.isBorrowed = true;
      title = book.title;
      author = book.author;
      bookResult.innerHTML = `<em ><p style='color: #28a745;'>${title} By ${author} has been borrowed!!</p></em>`;
    } else if (book.id === id && book.isBorrowed === true) {
      book.isBorrowed = false;
      title = book.title;
      author = book.author;
      bookResult.innerHTML = `<em><p style='color: #28a745;'>${title} By ${author} has been returned!!</p></em>`;
    }
  }
  availableBooks();
}

// clear inputs
function clearInputs() {
  document.querySelector("input").value = "";
  document.querySelector("select").value = "";
}
function clearInput() {
  document.getElementById("name-input").value = "";
  document.getElementById("author-input").value = "";
}

// handlesearch

document.querySelector(".search-form").addEventListener("submit", handleSearch);
document.querySelector(".add-form").addEventListener("submit", handleAddBook);

var searchResult = document.querySelector(".search-results");
var addResult = document.querySelector(".add-results");
var bookResult = document.querySelector(".results");
availableBooks();

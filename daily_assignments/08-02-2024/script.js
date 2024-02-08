alert("Welcome to Library Management System!!");

let id = 0;

let Book1 = new Book(id++, "Atomic Habits", "James Clear");
let Book2 = new Book(id++, "King of Greed", "Ana Huang");
let Book3 = new Book(id++, "Mathematics Class 12th", "R.D. Sharma");
let Library = [Book1, Book2, Book3];

console.log(Library);

function Book(id, title, author) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.isBorrowed = false;
}

function addBook(desg) {
  if (desg != 0) {
    let title = prompt("Enter the Title of the Book: ");
    let author = prompt("Enter the Author of the Book: ");
    let book = new Book(id++, title, author);
    Library.push(book);
    alert(
      `ID: ${book.id}, ${title} by ${author} Book is added in the Library!!`
    );
    console.log(Library);
  } else {
    alert(
      "You are a student!! You are not entitled to add books to the library. Kindly enter a valid Choice."
    );
    library(desg);
  }
}

function searchBook() {
  let title = prompt("Enter the title of the book: ");
  let isBook = false;
  for (let book of Library) {
    if (book.title === title) {
      isBook = true;
      alert(
        `Here is the Book you searched for: \nID: ${book.id}, ${book.title} By ${book.author}`
      );
    }
  }
  if (!isBook) {
    alert("Sorry!! This Book is not available.");
  }
}

function availableBooks() {
  let books = [];
  for (let book of Library) {
    if (!book.isBorrowed) {
      books.push(` \nID: ${book.id}, ${book.title} By ${book.author} `);
    }
  }
  alert(`These are the available books: ${books}`);
}

function borrow(name) {
  alert("Find the book which you want to borrow!!");
  availableBooks();
  let id = parseInt(prompt("Enter the ID of the book: "));
  let borrowed = false;
  for (let book of Library) {
    if (book.id === id) {
      borrowed = true;
      if (!book.isBorrowed) {
        book.isBorrowed = true;
        console.log(book);
        alert(
          `ID: ${book.id}, ${book.title} By ${book.author} is borrowed by ${name}`
        );
      } else {
        alert("Sorry!! This book is currently not available.");
      }
    }
  }

  if (!borrowed) {
    alert("Enter a valid book's ID");
  }
}

function returnBook(name) {
  let id = parseInt(
    prompt("Enter the ID of the book which you want to return: ")
  );
  let returned = false;
  for (let book of Library) {
    if (book.id === id) {
      returned = true;
      if (book.isBorrowed) {
        book.isBorrowed = false;
        console.log(book);
        alert(
          `ID: ${book.id}, ${book.title} By ${book.author} is returned by ${name}`
        );
      } else {
        alert("Please enter ID of the book which you borrowed!!");
      }
    }
  }

  if (!returned) {
    alert("Enter a valid book's title");
  }
}

function library(name, desg) {
  let op = parseInt(
    prompt(
      "Enter your choice \n1: Search for a Book \n2: List Available Books \n3: Borrow a Book \n4: Return a Book \n5: Add a Book \n0: exit "
    )
  );

  switch (op) {
    case 0:
      alert("Thanks " + name + " for using our Library Management System");
      break;

    case 1:
      searchBook();
      library(name, desg);
      break;

    case 2:
      availableBooks();
      library(name, desg);
      break;

    case 3:
      borrow(name);
      library(name, desg);
      break;

    case 4:
      returnBook(name);
      library(name, desg);
      break;

    case 5:
      addBook(desg);
      library(name, desg);
      break;

    default:
      alert("Please enter a valid task!!");
      library(name, desg);
      break;
  }
}

let name = prompt("Enter your name: ");
let designation = parseInt(
  prompt("Enter your Designation: \n0: Student \n1: Professor \n2: Librarian")
);

while (designation != 0 && designation != 1 && designation != 2) {
  designation = parseInt(
    prompt(
      "Enter a valid Designation: \n0: Student \n1: Professor \n2: Librarian"
    )
  );
}
library(name, designation);

const url = "https://jsonplaceholder.typicode.com";

// get users using async programming
async function getUsers() {
  const response = await fetch(url + "/users");
  const data = await response.json();
  displayUsers(data);
  //   data.map((user) => console.log(user));
}
getUsers();

const userTable = document.querySelector(".user");

function displayUsers(users) {
  userTable.innerHTML =
    "<tr><th>User ID</th><th>Name</th><th>Username</th><th>E-mail ID</th><th>Address</th><th>Phone No.</th><th>Website</th><th>Company</th></tr>";

  users.map((user) => {
    let i = 0;
    let newRow = userTable.insertRow(userTable.rows.length);

    for (key in user) {
      //   console.log(key);
      if (typeof user[key] != "object") {
        newRow.insertCell(i++).innerHTML = user[key];
      } else {
        let value = destructure(user[key]);
        newRow.insertCell(i++).innerHTML = value;
      }
    }
  });
}

// get posts using async programming
async function getPosts() {
  const response = await fetch(url + "/posts");
  const data = await response.json();
  displayPosts(data);
  //   data.map((post) => console.log(post));
}
getPosts();

const postTable = document.querySelector(".post");

function displayPosts(posts) {
  postTable.innerHTML =
    "<tr><th>Post ID</th><th>Title</th><th>Post</th><th>User ID</th></tr>";

  posts.map((post) => {
    let newRow = postTable.insertRow(postTable.rows.length);
    newRow.insertCell(0).innerHTML = post.id;
    newRow.insertCell(1).innerHTML = post.title;
    newRow.insertCell(2).innerHTML = post.body;
    newRow.insertCell(3).innerHTML = post.userId;
  });
}

// get Todos using async programming
async function getTodos() {
  const response = await fetch(url + "/todos");
  const data = await response.json();
  displayTodos(data);
  //   data.map((post) => console.log(post));
}
getTodos();

const todoTable = document.querySelector(".todo");

function displayTodos(todos) {
  todoTable.innerHTML =
    "<tr><th>Post ID</th><th>ToDo</th><th>Completed</th><th>User ID</th></tr>";

  todos.map((todo) => {
    let newRow = todoTable.insertRow(todoTable.rows.length);
    //

    newRow.insertCell(0).innerHTML = todo.id;
    newRow.insertCell(1).innerHTML = todo.title;
    newRow.insertCell(2).innerHTML = todo.completed ? "Yes" : "No";
    newRow.insertCell(3).innerHTML = todo.userId;
  });
}

//destructure function
function destructure(obj) {
  let value = "";
  for (key in obj) {
    if (typeof obj[key] != "object") {
      value += obj[key] + "<br>";
    } else {
      value += destructure(obj[key]) + "<br>";
    }
  }
  return value;
}

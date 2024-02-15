// const prom = new Promise((resolve, reject) => {

// });

const { promise, resolve, reject } = new Promise();

promise(() => {
  let user = "aman";
  if (user === "aman") {
    resolve(user);
  } else {
    reject("User not found!");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

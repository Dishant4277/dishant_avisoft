function getName() {
  return this.name;
}

const obj1 = {
  name: "rohan",
  getName: getName,
};
const obj2 = {
  name: "sohan",
  getName: getName,
};

console.log(obj1.getName());
console.log(obj2.getName());

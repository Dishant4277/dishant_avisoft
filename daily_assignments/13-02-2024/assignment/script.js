const Student = {
  Name: "Wade Wilson",
  Age: "20",
  Grades: [68, 85, 70, 60],
  Subjects: [
    "Programming with JavaScript",
    "Software Engineering",
    "Machine Learning",
    "Network Security",
  ],
};

// unbound function
function displayInfo() {
  console.log("Unbound Fn");
  console.log(Student.Name);
  console.log(Student.Age);
  console.log(Student.Grades);
}
displayInfo();

// bound function
function boundDisplayInfo() {
  console.log("Bound Fn");
  console.log(this.Name);
  console.log(this.Age);
  console.log(this.Grades);
}

// bind function
let boundFn = boundDisplayInfo.bind(Student);
boundFn();

// implementing call() and apply() functions
function modifiedDisplayInfo(greeting, day) {
  console.log("Modified Bound Fn with call and apply");
  console.log(greeting);
  console.log(day);
  console.log(this.Name);
  console.log(this.Age);
  console.log(this.Grades);
}
modifiedDisplayInfo.call(Student, "Good Morning!", "Monday");
modifiedDisplayInfo.apply(Student, ["Hello, Good Evening!", "Saturday"]);

// implementing callbacks

function processSubjects(Subjects, operator) {
  for (let subject of Subjects) {
    operator(subject);
  }
}
console.log("Process Subjects using callback");
processSubjects(Student.Subjects, (sub) => console.log(sub));

// implementing map() and filter()
function doubleGrades(grad) {
  return grad.map((a) => a * 2);
}
console.log("Grades modified using map()");
console.log(Student.Grades);
console.log(doubleGrades(Student.Grades));

function passingSubjects(sub, grad) {
  return sub.filter((a, key) => {
    if (grad[key] >= 70) {
      return a;
    }
  });
}
console.log("subjects filtered using grades and filter()");
console.log(Student.Subjects);
console.log(passingSubjects(Student.Subjects, Student.Grades));

alert("Welcome to Interactive Calculator");

let num1 = parseFloat(prompt("Enter the value of Num 1: "));
let num2 = parseFloat(prompt("Enter the value of Num 2: "));

let op = prompt("Enter the operation to be performed: [add,sub,mul,div,mod]");

switch (op) {
  case "add":
    alert(
      "The Value of Addition of " +
        num1 +
        " and " +
        num2 +
        " is: " +
        (num1 + num2)
    );
    break;
  case "sub":
    alert(
      "The Value of Subtraction of " +
        num1 +
        " and " +
        num2 +
        " is: " +
        (num1 - num2)
    );
    break;
  case "mul":
    alert(
      "The Value of Multiplication of " +
        num1 +
        " and " +
        num2 +
        " is: " +
        num1 * num2
    );
    break;
  case "div":
    alert(
      "The Value of Division of " +
        num1 +
        " and " +
        num2 +
        " is: " +
        num1 / num2
    );
    break;
  case "mod":
    alert(
      "The Value of Modulo of " +
        num1 +
        " and " +
        num2 +
        " is: " +
        (num1 % num2)
    );
    break;
  default:
    alert("Reload the site and enter a valid operation!!!");
    break;
}

alert("Reload the site to calculate again!!!");

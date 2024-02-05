alert("Welcome to Simple Interest Calculator!");

let P = parseFloat(prompt("Enter the principal amount(P): "));
let R = parseFloat(prompt("Enter the rate of interest(R): "));
let T = parseFloat(prompt("Enter the time period(T): "));

let SI = (P * R * T) / 100;

alert("The Simple Interest is: " + SI);

alert("Reload the site to calculate again!!");

alert("Welcome to Unit Converter Tool!");

let value = parseFloat(prompt("Enter the value: "));

let unit = prompt("Enter the unit of the value: [km,m,miles,deg_C,deg_F]");

let conv_unit = prompt(
  "Enter the unit to which you want to convert the value to: [km,m,miles,deg_C,deg_F]"
);

if (unit === conv_unit) {
  alert("The converted value in " + conv_unit + " is: " + value);
} else {
  if (unit === "km" && conv_unit === "m") {
    alert("The converted value in " + conv_unit + " is: " + value * 1000);
  } else if (unit === "km" && conv_unit === "miles") {
    alert("The converted value in " + conv_unit + " is: " + value * 0.622);
  } else if (unit === "m" && conv_unit === "km") {
    alert("The converted value in " + conv_unit + " is: " + value / 1000);
  } else if (unit === "m" && conv_unit === "miles") {
    alert("The converted value in " + conv_unit + " is: " + value * 0.000622);
  } else if (unit === "miles" && conv_unit === "km") {
    alert("The converted value in " + conv_unit + " is: " + value * 1.61);
  } else if (unit === "miles" && conv_unit === "m") {
    alert("The converted value in " + conv_unit + " is: " + value * 1610);
  } else if (unit === "deg_C" && conv_unit === "deg_F") {
    alert(
      "The converted value in " + conv_unit + " is: " + ((value * 9) / 5 + 32)
    );
  } else if (unit === "deg_F" && conv_unit === "deg_C") {
    alert(
      "The converted value in " + conv_unit + " is: " + ((value - 32) * 5) / 9
    );
  } else {
    alert("Reload the site and Enter a valid unit!!!");
  }
}

alert("Reload the Site to convert again");

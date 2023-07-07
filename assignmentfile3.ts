// THIS FILE CONTAINS ANSWERS FROM QUESTION 21 TO 30.

// SELF INTRODUCTION
console.log("THIS FILE CONTAINS ANSWERS FROM QUESTION 21 TO 30");
console.log("First Assignment Prepared by:");
console.log("Juned ur Rehman Bhatti");
console.log("BATCH 46 - PIAIC-Q1");
console.log("Roll Number: PIAIC216320");
console.log("****************************");


// Answer to Q#21
console.log("Answer to Q#21:\n");

// Define the me objects
let me1 = {
Degree: "Matriculation",
Place: "Hyderabad",
School: "Public Shcool",
passingYear: 1999
};
  
let me2 = {
Degree: "Intermediate",
Place: "Hyderabad",
School: "Public Shcool",
passingYear: 2001
};
  
let me3 = {
Degree: "BSBI",
Place: "Karachi",
School: "Hamdard University",
passingYear: 2006
};
  
// Print the objects
console.log("About Me 1:", me1);
console.log("About Me 2:", me2);
console.log("About Me 3:", me3);
  
console.log("===========================================================");


// Answer to Q#22
console.log("Answer to Q#22:\n");

let colors: string[] = ["blue", "green", "yellow"];
let b = 3;

if (colors[b] === undefined) {
b = b - 1;
console.log(colors[b]);
}

console.log("===========================================================");


// Answer to Q#23
console.log("Answer to Q#23:\n");

let car = 'subaru';
console.log("The car is = ",car,"\n")
// Test 1
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

// Test 2
console.log("Is car == 'honda'? I predict false.");
console.log(car == 'honda');

// Test 3
console.log("Is car != 'ford'? I predict true.");
console.log(car != 'ford');

// Test 4
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');

// Test 5
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

// Test 6
console.log("Is car === 'Subaru'? I predict false.");
console.log(car === 'Subaru');

// Test 7
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');

// Test 8
console.log("Is car !== 'honda'? I predict true.");
console.log(car !== 'honda');

// Test 9
console.log("Is car.length > 5? I predict false.");
console.log(car.length > 5);

// Test 10
console.log("Is car.length <= 10? I predict true.");
console.log(car.length <= 10);

console.log("===========================================================");


// Answer to Q#24
console.log("Answer to Q#24:\n");

let fruit = "apple";
let number = 10;
let rainbow = ["red", "green", "blue"];
console.log("Initial values of Fruit, Number & Colors are:",fruit,number,rainbow,"\n")

// Tests for equality and inequality with strings
console.log("Is fruit equal to 'apple'? I predict true.");
console.log(fruit === "apple");

console.log("Is fruit not equal to 'orange'? I predict true.");
console.log(fruit !== "orange");

// Test using the toLowerCase() function
console.log("Is fruit in lowercase equal to 'APPLE'? I predict true.");
console.log(fruit.toLowerCase() === "apple");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number equal to 10? I predict true.");
console.log(number === 10);

console.log("Is number not equal to 5? I predict true.");
console.log(number !== 5);

console.log("Is number greater than 5? I predict true.");
console.log(number > 5);

console.log("Is number less than or equal to 20? I predict true.");
console.log(number <= 20);

// Tests using "and" and "or" operators
console.log("Is fruit equal to 'apple' and number greater than 5? I predict true.");
console.log(fruit === "apple" && number > 5);

console.log("Is fruit not equal to 'orange' or number equal to 10? I predict true.");
console.log(fruit !== "orange" || number === 10);

// Test whether an item is in an array
console.log("Is 'red' in the colors array? I predict true.");
console.log(rainbow.indexOf("red"));

// Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict true.");
console.log(!rainbow.indexOf("yellow"));


console.log("===========================================================");


// Answer to Q#25
console.log("Answer to Q#25:\n");
let alien_color = "green";

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points!");
}

if (alien_color !== 'green') {
console.log("You just missed 5 points!"); }


console.log("===========================================================");


// Answer to Q#26
console.log("Answer to Q#26:\n");

let alien_colors : string[] = ["Red", "Green", "Blue"];
for (let c = 0; c < alien_colors.length; c++)
{
if ((alien_colors[c]) === 'Green')
{ console.log(alien_colors[c]);
console.log("You have earned 5 points");}
else
{console.log(alien_colors[c])
console.log("You have earned 10 points")}
}
console.log("===========================================================");


// Answer to Q#27
console.log("Answer to Q#27:\n");

let alien_colors1: string[] = ["Green", "Yellow", "Red"];

for (let d = 0; d < alien_colors1.length; d++) {
if (alien_colors1[d] === 'Green') {
console.log(alien_colors1[d]);
console.log("You have earned 5 points");
} else if (alien_colors1[d] === 'Yellow') {
console.log(alien_colors1[d]);
console.log("You have earned 10 points");
} else {
console.log(alien_colors1[d]);
console.log("You have earned 15 points");
}
}

console.log("===========================================================");


// Answer to Q#28
console.log("Answer to Q#28:\n");

let stageOfLifePrevious: string;

for (let age = 0; age <= 65; age++) {
let stageOfLife: string;

if (age < 2) {
stageOfLife = "Baby";
} else if (age < 4 ) {
stageOfLife = "Toddler";
} else if (age < 13) {
stageOfLife = "Kid";
} else if (age < 20) {
stageOfLife = "Teenager";
} else if (age < 65) {
stageOfLife = "Adult";
} else {
stageOfLife = "Elder";
}

if (age === 0 || stageOfLife !== stageOfLifePrevious) {
console.log(`From Age ${age} Stage Of Life is ${stageOfLife}.`);
stageOfLifePrevious = stageOfLife;
}
}


// Answer to Q#29
console.log("Answer to Q#29:\n");

let favorite_fruits: string[] = ["banana", "apple", "mango"];

if (favorite_fruits.indexOf("banana") !== -1) {
console.log("You really like bananas!");
} else {
console.log("This fruit is not my favorite!");
}

if (favorite_fruits.indexOf("apple") !== -1) {
console.log("You really like apples!");
} else {
console.log("This fruit is not my favorite!");
}

if (favorite_fruits.indexOf("mango") !== -1) {
console.log("You really like mangoes!");
} else {
console.log("This fruit is not my favorite!");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
console.log("You really like strawberries!");
} else {
console.log("This fruit is not my favorite!");
}

if (favorite_fruits.indexOf("orange") !== -1) {
console.log("You really like oranges!");
} else {
console.log("This fruit is not my favorite!");
}

console.log("===========================================================");


// Answer to Q#30
console.log("Answer to Q#30:\n");
let usernames: string[] = ["admin", "Eric", "John", "Jane", "Alice"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
  }
}

console.log("===========================================================");


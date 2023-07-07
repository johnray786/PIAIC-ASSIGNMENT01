// THIS FILE CONTAINS ANSWERS FROM QUESTION 2 TO 10.

// SELF INTRODUCTION
console.log("THIS FILE CONTAINS ANSWERS FROM QUESTION 2 TO 10");
console.log("First Assignment Prepared by:");
console.log("Juned ur Rehman Bhatti");
console.log("BATCH 46 - PIAIC-Q1");
console.log("Roll Number: PIAIC216320");
console.log("****************************");


// Answer to Q#2
console.log("Answer to Q#2:\n");

let personalname = "Eric Mathews";
let test = "Would you like to learn some Python today?";

console.log("Hello!", personalname, "Would you like to learn some Python today?") ;
console.log("===========================================================");


// Answer to Q#3
console.log("Answer to Q#3:\n");

console.log(test.toUpperCase());
console.log(test.toLowerCase());
console.log(test);

function convertToTitleCase(sentence: string): string {
const words = sentence.toLowerCase().split(' ');
  
for (let i = 0; i < words.length; i++) { words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); }
  
return words.join(' ');
}
console.log("Hello!", personalname, convertToTitleCase(test));
console.log("===========================================================");


// Answer to Q#4
console.log("Answer to Q#4:\n");

let quote= "Albert Einstein once said,“A person who never made a mistake never tried anything new.”";
console.log(quote);
console.log("===========================================================");


// Answer to Q#5
console.log("Answer to Q#5:\n");

let famous_person = "Albert Einstein";
let message= "“A person who never made a mistake never tried anything new.”";
console.log(famous_person,"once said:",message);
console.log("===========================================================");


// Answer to Q#6
console.log("Answer to Q#6:\n");

let string1: string = "   I AM HERE      WORLD!";
console.log("With white space:",string1,"sentence character count:",string1.length);

console.log("\nTRIMMED STRINGS:");
console.log("\tTRIMMED STRINGS:");
let result1=string1.trim();
console.log("WITHOUT white space:",result1,"sentence character count:",result1.length);
console.log("===========================================================");


// Answer to Q#7
console.log("Answer to Q#7:\n");

console.log("x = 20 & y = 10");
let x:number=20;
let y:number=10;
console.log('Addition x+y:', x + y);
console.log('Substraction x-y:', x - y);
console.log('Multiplcation x*y:', x * y);
console.log('Division x/y:', x / y);
console.log("===========================================================")


// Answer to Q#8
console.log("Answer to Q#8:\n");


for (let j=0; j<4; j++) {
console.log("---------------------");
console.log("console.log (5+3)= 8");
console.log("---------------------");
}

console.log("");
console.log("===========================================================");


// Answer to Q#9
console.log("Answer to Q#9:\n");

let myfav:number = 7;
console.log("My favorite number is :",myfav,"\n");

console.log("===========================================================");


// Answer to Q#10
console.log("Answer to Q#10:\n");

// My name is Juned ur Rehman. This program is our "getting started excercises" given in Q1 of PIAIC Program.
// today's day is Thursday, July 6, 2023; time right now is 7:52 pm.
console.log("created comments in the code.")
// THIS FILE CONTAINS ANSWERS FROM QUESTION 31 TO 40.

// SELF INTRODUCTION
console.log("THIS FILE CONTAINS ANSWERS FROM QUESTION 31 TO 40");
console.log("First Assignment Prepared by:");
console.log("Juned ur Rehman Bhatti");
console.log("BATCH 46 - PIAIC-Q1");
console.log("Roll Number: PIAIC216320");
console.log("****************************");


// Answer to Q#31
console.log("Answer to Q#31:\n");

let usernames1: string[] = ["admin", "Eric", "John", "Jane", "Alice"];

if (usernames1.length === 0) {
console.log("We need to find some users!");
} else {
for (let i = 0; i < usernames1.length; i++) {
if (usernames1[i] === "admin") {
console.log("Hello admin, would you like to see a status report?");
} else {
console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
}
}
}

// Remove all usernames from the array
usernames1 = [];

if (usernames1.length === 0) {
  console.log("We need to find some users!");
}


console.log("===========================================================");


// Answer to Q#32
console.log("Answer to Q#32:\n");

let current_users: string[] = ["john", "mary", "alice", "tom", "jane"];
let new_users: string[] = ["John", "emma", "ALICE", "peter", "sarah"];

for (let i = 0; i < new_users.length; i++) {
let usernameExists = false;
for (let j = 0; j < current_users.length; j++) {
if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
usernameExists = true;
break;
}
}
if (usernameExists) {
console.log(`Username '${new_users[i]}' is not available. Please enter a new username.`);
} else {
console.log(`Username '${new_users[i]}' is available.`);
}
}
console.log("===========================================================");


// Answer to Q#33
console.log("Answer to Q#33:\n");

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
let number = numbers[i];
let ordinal = '';

if (number === 1) {
ordinal = 'st';
} else if (number === 2) {
ordinal = 'nd';
} else if (number === 3) {
ordinal = 'rd';
} else {
ordinal = 'th';
}

console.log(number + ordinal);
}

console.log("===========================================================");


// Answer to Q#34
console.log("Answer to Q#34:\n");
let pizzas: string[] = ["tikka", "fajita", "bbq chicken"];

for (let i = 0; i < pizzas.length; i++) {
console.log("I like " + pizzas[i] + " pizza.");
}

console.log("I really love pizza!");

console.log("===========================================================");


// Answer to Q#35
console.log("Answer to Q#35:\n");
let animals: string[] = ["dog", "cat", "rabbit"];

for (let i = 0; i < animals.length; i++) {
console.log("A " + animals[i] + " would make a great pet.");
}

console.log("Any of these animals would make a great pet!");

console.log("===========================================================");


// Answer to Q#36
console.log("Answer to Q#36:\n");
function make_shirt(size: string, message: string) {
console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}

// Call the function
make_shirt("Large", "Hello, World!");
console.log("===========================================================");  


// Answer to Q#37
console.log("Answer to Q#37:\n");
function make_shirts(size: string = "Large", message: string = "I love TypeScript") {
console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
}
  
// Call the function with default values
make_shirts();
  
// Call the function with a medium shirt and default message
make_shirts("Medium");
  
// Call the function with a custom size and message
make_shirts("Small", "Hello, World!");
  
console.log("===========================================================");    


// Answer to Q#38
console.log("Answer to Q#38:\n");
function describe_city(city: string, country: string = "Unknown") {
console.log(`${city} is in ${country}.`);
}
 
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("Sydney"); // Uses the default country value
console.log("===========================================================");      


// Answer to Q#39
console.log("Answer to Q#39:\n");
function city_country(city: string, country: string): string {
return `${city}, ${country}`;
}
  
// Call the function with different city-country pairs
let location1 = city_country("Lahore", "Pakistan");
let location2 = city_country("Paris", "France");
let location3 = city_country("Tokyo", "Japan");
  
// Print the returned values
console.log(location1);
console.log(location2);
console.log(location3);
console.log("===========================================================");  


// Answer to Q#40
console.log("Answer to Q#40:\n");
function make_album(artist: string, title: string, tracks?: number): object {
let album: any = {
artist: artist,
title: title
};
    
if (tracks) {
album.tracks = tracks;
}
    
return album;
}
 
// Call the function to create album objects
let album1 = make_album("Vital Signs", "Dil Dil Pakistan");
let album2 = make_album("Junoon", "Yaaro", 12);
let album3 = make_album("Nazia Hassan", "Disco Deewanay", 14);
  
// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
console.log("==========================================================="); 

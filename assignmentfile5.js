// THIS FILE CONTAINS ANSWERS FROM QUESTION 31 TO 40.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// SELF INTRODUCTION
console.log("THIS FILE CONTAINS ANSWERS FROM QUESTION 41 TO 45");
console.log("First Assignment Prepared by:");
console.log("Juned ur Rehman Bhatti");
console.log("BATCH 46 - PIAIC-Q1");
console.log("Roll Number: PIAIC216320");
console.log("****************************");
// Answer to Q#41
console.log("Answer to Q#41:\n");
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Create an array of magician's names
var magicians = ["Ainak Wala Jin", "Zakoota", "Umroo Ayyar", "Karnani Churhail"];
// Call the function to print the magician's names
show_magicians(magicians);
console.log("===========================================================");
// Answer to Q#42
console.log("Answer to Q#42:\n");
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Call the make_great() function to modify the magician's names
make_great(magicians);
// Call the show_magicians() function to print the modified magician's names
show_magicians(magicians);
console.log("===========================================================");
// Answer to Q#43
console.log("Answer to Q#43:\n");
function show_magicians1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great1(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians[i] = "the Great " + magicians1[i];
    }
    return modifiedMagicians;
}
// Create an array of magician's names
var magicians1 = ["Ainak Wala Jin", "Zakoota", "Umroo Ayyar", "Karnani Churhail"];
// Call the make_great() function with a copy of the magician's names
var modifiedMagicians = make_great1(__spreadArray([], magicians1, true));
// Call the show_magicians() function with the original and modified magician's names
console.log("Original Magicians:");
show_magicians1(magicians1);
console.log("Modified Magicians:");
show_magicians1(modifiedMagicians);
console.log("===========================================================");
// Answer to Q#44
console.log("Answer to Q#44:\n");
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Order Summary:");
    console.log("Bread: " + items[0]);
    console.log("Meat: " + items[1]);
    console.log("Vegetables: " + items.slice(2).join(", "));
    console.log("Enjoy your sandwich!");
    console.log("=========================");
}
// Call the function with different numbers of arguments
order_sandwich("Wheat", "Turkey", "Lettuce", "Tomato");
order_sandwich("pickles", "olives", "Onion");
order_sandwich("White", "Chicken");
console.log("===========================================================");
// Answer to Q#45
console.log("Answer to Q#45:\n");
function carInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the function with the required information and additional name-value pairs
var car = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["features", ["backup camera", "navigation system"]]);
// Print the returned Object to verify the information stored correctly
console.log(car);
console.log("===========================================================");

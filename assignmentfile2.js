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
console.log("First Assignment Prepared by:");
console.log("Juned ur Rehman Bhatti");
console.log("BATCH 46 - PIAIC-Q1");
console.log("Roll Number: PIAIC216320");
console.log("****************************");
// Answer to Q#11
console.log("Answer to Q#11:\n");
var names = ["Sohail", "Farhan", "Jamal", "Behzad"];
for (var j = 0; j < names.length; j++) {
    console.log(names[j]);
}
console.log("===========================================================");
// Answer to Q#12
console.log("Answer to Q#12:\n");
for (var j = 0; j < names.length; j++) {
    console.log("Hello my friend ", names[j], ", nice to see you!");
}
console.log("===========================================================");
// Answer to Q#13
console.log("Answer to Q#13:\n");
var transportation = ["Honda motorcycle", "TESLA car", "Harley bike", "Tomhawk helicopter"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a", transportation[i]);
}
console.log("===========================================================");
// Answer to Q#14
console.log("Answer to Q#14:\n");
var guestList = ["Farhan", "Dilawar", "Jamal"];
for (var k = 0; k < guestList.length; k++) {
    console.log("Dear", guestList[k] + ",");
    console.log("You are cordially invited to dinner at my place. It would be an honor to have you join us!");
    console.log("Sincerely,");
    console.log("Juned ur Rehman Bhatti\n");
}
console.log("===========================================================");
// Answer to Q#15
console.log("Answer to Q#15:\n");
var guestWhoCantMakeIt = "Farhan";
console.log(guestWhoCantMakeIt, "can't make it to the dinner.\n");
// Replace the guest who can't make it with a new person
var newGuest = "Sohail";
guestList[guestList.indexOf(guestWhoCantMakeIt)] = newGuest;
for (var x = 0; x < guestList.length; x++) {
    console.log("Dear", guestList[x] + ",");
    console.log("You are cordially invited to dinner at my place. It would be an honor to have you join us!");
    console.log("Sincerely,");
    console.log("Your Name\n");
}
console.log("===========================================================");
// Answer to Q#16
console.log("Answer to Q#16:\n");
console.log("Good news! We found a bigger dinner table.\n");
// Add one new guest to the beginning of the array
guestList.unshift("Shahzad");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Haris");
// Add one new guest to the end of the array
guestList.push("Aurangzeb");
// Print a new set of invitation messages
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear", guest + ",");
    console.log("You are cordially invited to dinner at my place. It would be an honor to have you join us!");
    console.log("Sincerely,");
    console.log("Your Name\n");
}
console.log("===========================================================");
// Answer to Q#17
console.log("Answer to Q#17:\n");
console.log("Attention All Invited Guests", guestList);
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.\n");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry,", removedGuest + ", we can't invite you to dinner this time.");
}
console.log("");
// Print a message to the remaining two guests
for (var y = 0; y < guestList.length; y++) {
    var guest = guestList[y];
    console.log("Dear", guest + ",");
    console.log("You're still invited to dinner!");
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
console.log("\nFinal guest list:", guestList);
console.log("===========================================================");
// Answer to Q#18
console.log("Answer to Q#18:\n");
var locations = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];
// Print the array in its original order
console.log("Original Order:", locations);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], locations, true).sort());
// Show that the array is still in its original order by printing it
console.log("Original Order (Unchanged):", locations);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], locations, true).sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original Order (Unchanged):", locations);
// Reverse the order of the list
locations.reverse();
console.log("Reversed Order:", locations);
// Reverse the order of the list again
locations.reverse();
console.log("Original Order (Unchanged):", locations);
// Sort the array in alphabetical order
locations.sort();
console.log("Alphabetical Order:", locations);
// Sort the array in reverse alphabetical order
locations.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", locations);
console.log("===========================================================");
// Answer to Q#19
console.log("Answer to Q#19:\n");
var guests1 = ["Farhan", "Dilawar", "Jamal"];
console.log("Number of guests originally invited were:", guests1.length, "\n");
console.log("===========================================================");
// Answer to Q#20
console.log("Answer to Q#20:\n");
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Matterhorn", "Mount Kilimanjaro"];
console.log("List of mountains:");
for (var i = 0; i < mountains.length; i++) {
    console.log(mountains[i]);
}
console.log("===========================================================");

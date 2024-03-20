// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
let userPreference = 'Sugar-free'; 
console.log(userPreference ? userPreference : 'Regular'); 
//Checks if userPreference is truthy (not undefined) and prints it, otherwise defaults to "Regular".


// #### Challenge 2: Stock Check
let cansLeft = 3; // Any number of cans
console.log(cansLeft < 5 ? "Time to restock!" : "We're stocked!");  // Print based on can count


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, prints "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
console.log(heartRate < 100 ? "Boost needed!" : "Energy Levels are High!");
//Checks if heartRate is less than 100 and prints "Boost needed!", or prints "Energy levels are high!"


// #### Challenge 4: Temperature Suitability
let currentTemp = 4; // Current temperature in °C
console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!"); //Print based on temperature
//Checks if temparature is below or equal then prints "Chilled to perfection!" or prints "Needs a cooler!" 


// #### Challenge 5: Late Night Coding Session
let currentHour = 22;
console.log((currentHour >= 7 && currentHour < 24) ? "Unleash the beast!" : "Better Stick to water."); 
//Checks if currentHour is between 7 (inclusive) and 24 (exclusive) and prints "Unleash the beast!", or prints "Better stick to water.". Note that < 24 ensures it doesn't include midnight itself.






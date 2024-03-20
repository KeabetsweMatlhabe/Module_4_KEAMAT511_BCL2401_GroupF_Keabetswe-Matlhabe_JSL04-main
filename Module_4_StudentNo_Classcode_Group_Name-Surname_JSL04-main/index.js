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
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
console.log(heartRate < 100 ? "Boost needed!" : "Energy Levels are High!");
//Checks if heartRate is less than 100 and prints "Boost needed!", or "Energy levels are high!"


// #### Challenge 4: Temperature Suitability
let currentTemp = 4; // Current temperature in °C
console.log(currentTemp <= 5 ? "Chilled to perfection!" : "Needs a cooler!"); //Print based on temperature
//Checks if temparature is below or equal then prints "Chilled to perfection!" or "Needs a cooler!" 


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.
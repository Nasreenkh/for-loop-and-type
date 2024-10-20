
//for loop example



for (let i = 0; i < 5; i++) {
    console.log(i); 
}

//flags or break use in for loop


// Define the correct number.
let correctNumber = 7;

// Initialize the flag as false.
// It will become true if the user guesses the correct number.
let isCorrect = false;

// Loop to simulate multiple guesses.
// Assume we have 3 attempts for the user to guess the correct number.
for (let attempt = 1; attempt <= 3; attempt++) {
    // Let's assume user guesses a number for each attempt.
    // Replace `userGuess` with the guessed number (e.g., 5, 7, or 3).
    let userGuess = 7; // Change this value to test different guesses.

    // Check if the guessed number is correct.
    if (userGuess === correctNumber) {
        // Set the flag to true since the guess is correct.
        isCorrect = true;

        // Break out of the loop as the user guessed correctly.
        break;
    }
}

// After the loop, check if the guess was correct or not.
if (isCorrect) {
    console.log("Yes, the user guessed the correct number!");
} else {
    console.log("No, the user did not guess the correct number.");
}



let found = false;
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        found = true;
        break;
    }
}
console.log(found); // Output: true


//break in loop


for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // Output: 0, 1, 2
}


//boolean use in for 


// Define a boolean flag to check if the number 3 is found.
let isThreeFound = false;

// Loop through numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
    // Check if the current number is 3.
    if (i === 3) {
        // Set the boolean to true if 3 is found.
        isThreeFound = true;
    }
}

// After the loop, check if the number 3 was found.
if (isThreeFound) {
    console.log("The number 3 was found.");
} else {
    console.log("The number 3 was not found.");
}



//array.length use for loop




// Define an array of numbers.
let numbers = [10, 20, 30, 40, 50];

// Loop through the array using the .length property.
for (let i = 0; i < numbers.length; i++) {
    // Print each element in the array.
    console.log("Element at index " + i + ": " + numbers[i]);
}






//nested for loop


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}


// Example of a Nested Loop
for (let i = 1; i <= 3; i++) { // Outer loop (runs 3 times)
    console.log("Outer loop iteration: " + i);

    for (let j = 1; j <= 2; j++) { // Inner loop (runs 2 times)
        console.log("  Inner loop iteration: " + j);
    }
}



// Make a keyless car for renters above the age 25!
// This car will only let you drive if you are 25 and over. Make it do the following:

//using prompt() and alert(), ask a user for their age.

// IF they say they are below 25, respond with:
// "Sorry, you are too young to drive/rent this car. Powering off"

// IF they say they are 25, respond with:
// "Congratulations on your first year of driving a rental car. Enjoy the ride!"

// IF they say they are over 25, respond with:
// "Powering On. Enjoy the ride!"

function canYouDrive() {
  let userAge = prompt("Please enter your age:");

  // Check if the user provided a valid number
  if (userAge === null || userAge.trim() === "") {
    // Handle the case where the user cancels the prompt or enters an empty string
    alert("Invalid input. Please enter a valid age.");
    return;
  }

  userAge = Number(userAge);

  // Check the user's age and respond accordingly

  if (userAge === 25) {
    alert(
      "Congratulations on your first year of driving a rental car. Enjoy the ride!"
    );
  } else if (userAge > 25) {
    alert("Powering On. Enjoy the ride!");
  } else {
    alert("Sorry, you are too young to drive/rent this car. Powering off.");
  }
}

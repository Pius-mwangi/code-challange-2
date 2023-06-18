// Function to check car speed and demerit points
function checkSpeed() {
    // Prompt the user for car speed input
    let carSpeed = prompt("INPUT CAR SPEED HERE!");
  
    // Define the demerit points threshold and speed limit
    let points = 12;
    let limit = 70;
  
    // Calculate the difference between car speed and limit
    let counter = carSpeed - limit;
  
    // Calculate the demerit points per km/h over the limit
    let counter2 = counter / 5;
  
    // Round down the demerit points to a whole number
    let counter3 = Math.floor(counter2);
  
    // Check if car speed is within the limit
    if (carSpeed < limit) {
      console.log("OK"); // Car speed is within the limit
    } else {
      console.log(counter3); // Output the number of demerit points
    }
  
    // Check if demerit points exceed the threshold for license suspension
    if (counter3 >= points) {
      console.log("License suspended"); // License suspension required
    }
  }
  
  // Call the function to execute the code
  checkSpeed();
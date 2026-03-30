"use strict";
// Global variables
// const API_URL = "https://api.example.com/data";
// let dataCache = {};

// // Fetch data from API
// async function fetchData() {
//     try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         dataCache = data; // Cache the data
//         displayData(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// // Display data on the page
// function displayData(data) {
//     const container = document.getElementById("data-container");
//     container.innerHTML = ""; // Clear previous data

//     data.forEach(item => {
//         const itemElement = document.createElement("div");
//         itemElement.className = "data-item";
//         itemElement.textContent = item.name; // Assuming 'name' is a property of the data items
//         container.appendChild(itemElement);
//     });
// }

// // Initialize the app
// document.addEventListener("DOMContentLoaded", () => {
//     fetchData();
// });

// window.alert("Hello, World! This is a simple JavaScript alert.");

// (method) alert(message?: any): void
// window.alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog. The message can be of any type, but it will be converted to a string before being displayed. The alert() method is typically used to display information to the user or to prompt them for input. In this example, the alert will display the message "Hello, World! This is a simple JavaScript alert." when the page loads.

function showAlert() {
    alert("This is an alert triggered by a button click!");
}

// This function can be called when a button is clicked to display an alert message. For example, you can add a button to your HTML like this:
// <button onclick="showAlert()">Click me</button>
// When the user clicks the button, the showAlert() function will be executed, and an alert will appear with the message "This is an alert triggered by a button click!". 

function calculateSum(x = 10, y = 20) {
    var sum = x + y;
    console.log("The sum of x and y is: " + sum);
}

calculateSum(); // This will use the default values of x and y, resulting in a sum of 30.
calculateSum(5, 15); // This will use the provided values of x and y, resulting in a sum of 20. 

// var answer = prompt("Dude, tell me everything you know about programming", "...");
// console.log("User's answer: " + answer);

// The prompt() function displays a dialog with an optional message prompting the user to input some text. In this example, the prompt will ask the user "Dude, tell me everything you know about programming" and provide a default input of "...". The user's response will be stored in the variable 'answer' and then logged to the console.    
// var userName; // Declare a global variable to store the user's name
function askName() {

    let userName = prompt("Please enter your name:");
    if (userName) {
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        alert("Hello! Welcome to our website.");
    }
}
// askName();
// console.log("Asking user for their name...", userName);

// This code prompts the user to enter their name. If the user provides a name, it will greet them with a personalized message. If the user does not enter a name (i.e., they click "Cancel" or leave the input blank), it will greet them with a generic message.  

function askAge() {
    const userAge = prompt("Please enter your age:");
    if (userAge) {
        const ageNumber = parseInt(userAge);
        if (!isNaN(ageNumber)) {
            alert("You are " + ageNumber + " years old.");
        } else {
            alert("Please enter a valid number for your age.");
        }
    } else {
        alert("Age input was cancelled.");
    }
}
askAge();
const userAge = 12;
// This code prompts the user to enter their age. It then checks if the input is not empty and attempts to convert it to a number using parseInt(). If the conversion is successful and the result is a valid number, it will display the user's age in an alert. If the input is not a valid number, it will prompt the user to enter a valid number. If the user cancels the prompt or leaves it blank, it will display a message indicating that the age input was cancelled.    

// userAge = 12; // This line will cause an error because userAge is declared as a constant (const) and cannot be reassigned. To fix this, you can either change the declaration to let or var, or simply remove this line if you want to keep userAge as a constant.


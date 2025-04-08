// Makes sure the HTML is ready before running the code
document.addEventListener('DOMContentLoaded', function() {
    // this helps to Get DOM elements
    //this code Finds the input field for price per liter
    const pricePerLiterInput = document.getElementById('pricePerLiter');
    //this line of code Finds the input field for number of liters
    const litersInput = document.getElementById('liters');
    // this code Finds the calculate button
    const calculateBtn = document.getElementById('calculateBtn');
    // this code Finds the element where result will be shown
    const resultElement = document.getElementById('result');

    // Add click event listener to calculate button
    //this code Runs the calculateTotal function when button is clicked
    calculateBtn.addEventListener('click', calculateTotal);

    // Function to calculate and display total cost
    // this Defines what happens when calculating
    function calculateTotal() {
        // Get values from inputs and convert to numbers
        //this code helps to Get price per liter and turns it into a number (0 if invalid)
        const pricePerLiter = parseFloat(pricePerLiterInput.value) || 0;
        // this code Gets liters and turns it into a number (0 if invalid)
        const liters = parseFloat(litersInput.value) || 0;

        // this Calculate total
        // this code Multiplies price per liter by number of liters
        const total = pricePerLiter * liters;

        // this is used toDisplay result with 2 decimal places
        // this code Shows the total cost in pounds with 2 digits after decimal
        resultElement.textContent = `Total Cost: £${total.toFixed(2)}`;
    }
});
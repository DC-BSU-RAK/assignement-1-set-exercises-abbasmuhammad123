// this code Initializes game variables
let lives = 3; // Player starts with 3 lives
let score = 0; // Player score starts at 0
let correctColor = null; // this code Stores the correct color for each round

// Get HTML elements for display
const livesText = document.getElementById('lives'); // this is Element to show lives
const scoreText = document.getElementById('score'); // this is Element to show score
const rgbText = document.getElementById('rgb-value'); // this is Element to show RGB value
const colorsDiv = document.getElementById('colors'); // this is Container for color boxes
const messageText = document.getElementById('message'); //this is Element to show messages
const gameOverDiv = document.getElementById('game-over'); //this will show Game over screen
const finalScoreText = document.getElementById('final-score'); // this is Element to show final score
const replayButton = document.getElementById('replay'); // this is the button of Replay button

// Generate a random RGB color
function makeColor() {
    const r = Math.floor(Math.random() * 256); // Random red value (0-255)
    const g = Math.floor(Math.random() * 256); // Random green value (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
    return { r, g, b }; // Return color object
}

// this code is used to Start a new round
function newRound() {
    colorsDiv.innerHTML = ''; // Clear previous color boxes
    messageText.textContent = ''; // Clear previous message
    correctColor = makeColor(); // this code helps to Generate new correct color
    rgbText.textContent = `RGB(${correctColor.r}, ${correctColor.g}, ${correctColor.b})`; // this code Display RGB value
    const colors = [correctColor, makeColor(), makeColor()]; // this code Creates array with correct and two random colors
    colors.sort(() => Math.random() - 0.5); // this code is used to Shuffle colors randomly
    colors.forEach(color => { // this code Loop through colors
        const box = document.createElement('div'); //this code Create a div for each color
        box.classList.add('color-box'); // this code Add color-box class
        box.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`; //this code Set box color
        box.addEventListener('click', () => checkColor(color)); // this code Add click event listener
        colorsDiv.appendChild(box); //this code Add box to colors container
    });
}

// this code Checks if clicked color is correct
function checkColor(color) {
    if (color.r === correctColor.r && color.g === correctColor.g && color.b === correctColor.b) { // If color matches correct color
        messageText.textContent = 'Correct!'; // this code helps to Show success message
        messageText.style.color = 'green'; // this code Set message color to green
        score += 10; // Increase score by 10
        scoreText.textContent = score; // this code Update score display
        setTimeout(newRound, 1000); // this code Start new round after 1 second
    } else { // If color is wrong
        messageText.textContent = 'Wrong!'; //this code  Show error message
        messageText.style.color = 'red'; // this code Set message color to red
        lives -= 1; // this code Decrease lives by 1
        livesText.textContent = lives; // this code Update lives display
        if (lives === 0) { // If no lives left
            endGame(); //this code Ends the game
        }
    }
}

//this code displays game over screen
function endGame() {
    colorsDiv.innerHTML = ''; // Clear color boxes
    rgbText.textContent = ''; // Clear RGB display
    messageText.textContent = ''; // Clear message
    finalScoreText.textContent = `Score: ${score}`; // Show final score
    gameOverDiv.classList.remove('hidden'); // Show game over screen
}

// this code is used to Start or restart the game
function startGame() {
    lives = 3; // Reset lives to 3
    score = 0; // Reset score to 0
    livesText.textContent = lives; // Update lives display
    scoreText.textContent = score; // Update score display
    gameOverDiv.classList.add('hidden'); // Hide game over screen
    newRound(); // Start a new round
}

// this code Adds click event to replay button
replayButton.addEventListener('click', startGame); // Restart game on replay click

// to Start the game on page load
startGame(); // this code Initialize the game
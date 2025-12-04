const selectRockButton = document.getElementById("selectRockBtn");
const selectPaperButton = document.getElementById("selectPaperBtn");
const selectScissorButton = document.getElementById("selectScissorBtn");

const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorIcon = document.getElementById("scissorIcon");

// select 1 icon only

// first put all icons into an array
const icons = [rockIcon, paperIcon, scissorIcon];

let userChoice;

const selectOneIconOnly = (icon) => {

    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove("selected");
    };

    icon.classList.add("selected");
};

selectRockButton.addEventListener("click", () => {

    selectOneIconOnly(rockIcon);

    userChoice = 'rock';

    /* we can put the randomSelection function here so it runs after the
    user selects a button first */
}, setTimeout(() => {
    randomSelection();
}, 3000));

selectPaperButton.addEventListener("click", () => {

    selectOneIconOnly(paperIcon);

    userChoice = 'paper';

}, setTimeout(() => {
    randomSelection();
}, 3000));

selectScissorButton.addEventListener("click", () => {

    selectOneIconOnly(scissorIcon);

    userChoice = 'scissor';

}, setTimeout(() => {
    randomSelection();
}, 3000));

// Random robot selection

// This will assign a number between 0 and 3 excluding 3.
// These numbers will be our index numbers for our icons array.
const randomNumber = Math.floor(Math.random() * 3);
const selections = ['rock', 'paper', 'scissors'];
let robotChoice;


const randomSelection = () => {

    if (selections[randomNumber] === 'rock') {
        rockIcon.classList.add("selectedRobot");
        robotChoice = 'rock';

        /* logic which determines which player wins & gets the point  */
        if (userChoice === 'scissor' && robotChoice === 'rock') {
            document.getElementById("result").innerText = "Rock crushes Scissors, 1 point to Robot"
        }

        if (userChoice === 'paper' && robotChoice === 'rock') {
            document.getElementById("result").innerText = "Paper eats Rock, 1 point to Player 1"
        }

        if (userChoice === 'rock' && robotChoice === 'rock') {
            rockIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE"
        }
    }

    if (selections[randomNumber] === 'paper') {
        paperIcon.classList.add("selectedRobot");
        robotChoice = 'paper';

        if (userChoice === 'paper' && robotChoice === 'paper') {
            paperIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE"
        }

        if (userChoice === 'rock' && robotChoice === 'paper') {
            document.getElementById("result").innerText = "Paper eats Rock, 1 point to Robot"
        }

        if (userChoice === 'scissor' && robotChoice === 'paper') {
            document.getElementById("result").innerText = "Scissors cuts Paper, 1 point to Player 1"
        }
    }

    if (selections[randomNumber] === 'scissors') {
        scissorIcon.classList.add("selectedRobot");
        robotChoice = 'scissors';

        if (userChoice === 'scissor' && robotChoice === 'scissors') {
            scissorIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE"
        }

        if (userChoice === 'rock' && robotChoice === 'scissors') {
            document.getElementById("result").innerText = "Rock crushes Scissors, 1 point to Player 1"
        }

        if (userChoice === 'paper' && robotChoice === 'scissors') {
            document.getElementById("result").innerText = "Scissors cuts Rock, 1 point to Robot"
        }
    }

};

// this runs the robots selection  after 10 seconds.

/* setTimeout(() => {
    randomSelection();
}, 10000); */

/* if user choice and computer choice is the same border needs
to be a different colour. */
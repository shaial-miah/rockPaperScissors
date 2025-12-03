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

});

selectPaperButton.addEventListener("click", () => {

    selectOneIconOnly(paperIcon);

    userChoice = 'paper';

});

selectScissorButton.addEventListener("click", () => {

    selectOneIconOnly(scissorIcon);

    userChoice = 'scissors';

});

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
    }

    if (selections[randomNumber] === 'scissors') {
        scissorIcon.classList.add("selectedRobot");
        robotChoice = 'scissors';
        if (userChoice === 'scissors' && robotChoice === 'scissors') {
            paperIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE"
        }
    }

};

setTimeout(() => {
    randomSelection();
}, 10000);

/* if user choice and computer choice is the same border needs
to be a different colour. */
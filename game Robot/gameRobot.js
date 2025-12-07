const selectRockButton = document.getElementById("selectRockBtn");
const selectPaperButton = document.getElementById("selectPaperBtn");
const selectScissorButton = document.getElementById("selectScissorBtn");

const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorIcon = document.getElementById("scissorIcon");

// score result update.

let playerScoreResult = document.getElementById("playerScoreResult");
let robotScoreResult = document.getElementById("robotScoreResult");



// we use parseInt() to convert the string into an integer
// getItem() gets the value for the key 'playerScore' or 'robotScore' or if there
// is no value, the value is 0 (this will be the case for a new game)

let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let robotScore = parseInt(localStorage.getItem("robotScore")) || 0;

// this updates the score board
robotScoreResult.innerText = robotScore;
playerScoreResult.innerText = playerScore;



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
    setTimeout(() => {
        randomSelection();
    }, 3000);
});

selectPaperButton.addEventListener("click", () => {

    selectOneIconOnly(paperIcon);

    userChoice = 'paper';

    setTimeout(() => {
        randomSelection();
    }, 3000);

});

selectScissorButton.addEventListener("click", () => {

    selectOneIconOnly(scissorIcon);

    userChoice = 'scissors';

    setTimeout(() => {
        randomSelection();
    }, 3000);

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

        /* logic which determines which player wins & gets the point  */
        if (userChoice === 'scissors' && robotChoice === 'rock') {
            document.getElementById("result").innerText = "Rock crushes Scissors, 1 point to Robot";
            robotScore++;
            localStorage.setItem("robotScore", robotScore);
            robotScoreResult.innerText = robotScore;

            if (playerScore === 3 || robotScore === 3) {
                endGame();
            } else {
            nextRoundButtonAppears();
            };
        }

        if (userChoice === 'paper' && robotChoice === 'rock') {
            document.getElementById("result").innerText = "Paper eats Rock, 1 point to Player 1";
            playerScore++;
            localStorage.setItem("playerScore", playerScore);
            playerScoreResult.innerText = playerScore;
            
            if (playerScore === 3 || robotScore === 3) {
                endGame();
            } else {
            nextRoundButtonAppears();
            };
        }

        if (userChoice === 'rock' && robotChoice === 'rock') {
            /* if user choice and computer choice is the same border needs
to be a different colour. */
            rockIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE";

            if (document.getElementById("result").innerText = "TIE") {

                /* if the result is tie, the selections object is removed to prevent further selections
                the browser is also refreshed. */
                document.getElementsByClassName("selections")[0].style.display = "none";
                setTimeout(() => {
                    location.reload()
                }, 3000)
            }
        }
    }

    if (selections[randomNumber] === 'paper') {
        paperIcon.classList.add("selectedRobot");
        robotChoice = 'paper';

        if (userChoice === 'paper' && robotChoice === 'paper') {
            paperIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE";

            if (document.getElementById("result").innerText = "TIE") {

                /* if the result is tie, the selections object is removed to prevent further selections
                the browser is also refreshed. */
                document.getElementsByClassName("selections")[0].style.display = "none";
                setTimeout(() => {
                    location.reload()
                }, 3000)
            }
        }

        if (userChoice === 'rock' && robotChoice === 'paper') {
            document.getElementById("result").innerText = "Paper eats Rock, 1 point to Robot";
            robotScore++;
            localStorage.setItem("robotScore", robotScore);
            robotScoreResult.innerText = robotScore;
            
            if (playerScore === 3 || robotScore === 3) {
                endGame();
            } else {
            nextRoundButtonAppears();
            };
        }

        if (userChoice === 'scissors' && robotChoice === 'paper') {
            document.getElementById("result").innerText = "Scissors cuts Paper, 1 point to Player 1";
            playerScore++;
            localStorage.setItem("playerScore", playerScore);
            playerScoreResult.innerText = playerScore;
            
            if (playerScore === 3 || robotScore === 3) {
                endGame();
            } else {
            nextRoundButtonAppears();
            };
        }
    }

    if (selections[randomNumber] === 'scissors') {
        scissorIcon.classList.add("selectedRobot");
        robotChoice = 'scissors';

        if (userChoice === 'scissors' && robotChoice === 'scissors') {
            scissorIcon.classList.add("selectionTie");
            document.getElementById("result").innerText = "TIE";

            if (document.getElementById("result").innerText = "TIE") {

                /* if the result is tie, the selections object is removed to prevent further selections
                the browser is also refreshed. */
                document.getElementsByClassName("selections")[0].style.display = "none";
                setTimeout(() => {
                    location.reload()
                }, 3000)
            }
        }

        if (userChoice === 'rock' && robotChoice === 'scissors') {
            document.getElementById("result").innerText = "Rock crushes Scissors, 1 point to Player 1";
            playerScore++;
            localStorage.setItem("playerScore", playerScore);
            playerScoreResult.innerText = playerScore;
            
            if (playerScore === 3 || robotScore === 3) {
                endGame();
            } else {
            nextRoundButtonAppears();
            };
        }

        if (userChoice === 'paper' && robotChoice === 'scissors') {
            document.getElementById("result").innerText = "Scissors cuts Rock, 1 point to Robot";
            robotScore++;
            localStorage.setItem("robotScore", robotScore);
            robotScoreResult.innerText = robotScore;
            
            if (playerScore === 3 || robotScore === 3) {
                endGame();
            } else {
            nextRoundButtonAppears();
            };
        }
    }

};

/* next round button appears */

const nextRoundButtonAppears = () => {

    let nextRoundSection = document.getElementById("nextRoundSection");

    if (playerScore !== robotScore || playerScore == robotScore) {

        let nextRoundButton = document.createElement("button");
        nextRoundButton.classList.add("nextRoundButton")
        nextRoundButton.innerText = "Next round";

        // this hides the selections element after the initial round.
        document.getElementsByClassName('selections')[0].style.display = "none";

        nextRoundSection.appendChild(nextRoundButton);

        /* clicking the next round button refreshes the page for the next round
 */
        nextRoundButton.addEventListener("click", () => {
            location.reload();
        })

    }
};

// end game function

let playerLeaderBoardPoint = 0;
let robotLeaderBoardPoint = 0;

const endGame = () => {

    let gameOverMessage = document.createElement("p");
    let returnHomeButton = document.createElement("button");

    returnHomeButton.innerText = "Return to home"

    document.getElementsByClassName("selections")[0].style.display = "none";
    document.getElementsByClassName("iconSection")[0].style.display = "none";
    document.getElementById("result").style.display = "none";

    document.body.appendChild(gameOverMessage);
    document.body.appendChild(returnHomeButton);

    // clicking returnHomeButton takes us back to start.

    returnHomeButton.addEventListener("click", () => {
        window.location.href = "/index/index.html"
    });

    if (playerScore > robotScore) {
        gameOverMessage.innerText = "Game Over...Shaial wins 10 points!";
        playerLeaderBoardPoint = playerLeaderBoardPoint + 10;
    } else if (robotScore > playerScore) {
        gameOverMessage.innerText = "Game Over...Robot Wins 10 points!";
        robotLeaderBoardPoint = robotLeaderBoardPoint + 10;
    }

    localStorage.removeItem("playerScore");
    localStorage.removeItem("robotScore");

};

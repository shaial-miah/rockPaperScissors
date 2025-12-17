let playButton = document.getElementById("playButton");
let inputField = document.getElementById("inputName");

let players = JSON.parse(localStorage.getItem("players")) || [];

const savePlayersToLocalStorage = () => {

    let inputName = inputField.value.trim();

    if (inputName === "") {
        return
    };

    // json.parse() converts a JSON string into a real javascript value.

    /* Here we use localStorage to get the key "players" and their values, however, if
    there is none, we assign players to an empty array, here is where we will save our player objects. */

    // we need to assign a new player object for all new players.
    let newPlayer = {
        name: inputName,
        point: 0
    };

    
    /* loop through the players array, if a player already exists
    log an Error to the console. */
    for (let i = 0; i < players.length; i++) {

        if (inputName === players[i].name) {
            console.log(new Error("player already exits"));
            return;
        } 
    }

    // push this new player object onto our players array.

    players.push(newPlayer);

    // we need to save this to our local storage again.

    // JSON.stringify converts javascript real values into JSON strings.

    localStorage.setItem("players", JSON.stringify(players));

    // we then need to render our players onto our ui.

    // run the render players function here:

    renderPlayers(players);

    inputField.value = "";
};

const renderPlayers = (players) => {

    const section = document.getElementsByClassName("leaderboard")[0];
    section.classList.add("leaderboard");
    const table = document.getElementById("leaderboardTable");
    table.innerHTML = "";

    // here we need to render each player object in the players array above into our ui.

    // use a for loop to loop through each item.

    for (let i = 0; i < players.length; i++) {

        const row = document.createElement("tr");
        const nameCell = document.createElement("td");

        nameCell.innerHTML = players[i].name;

        const pointCell = document.createElement("td");
        pointCell.innerHTML = players[i].point;

        // construct the elements.

        row.appendChild(nameCell);
        row.appendChild(pointCell);

        table.appendChild(row);

        section.appendChild(table);
        
    };
};

if (playButton) {
    playButton.addEventListener("click", ()=> {

        if (inputField.value === "") {
            window.alert("Enter your name to proceed: ")
        } else {
    
            savePlayersToLocalStorage();
            window.location.href = "/game Modes/gameMode.html";
        };

        
    });
}

window.addEventListener("load", () => {
    players = JSON.parse(localStorage.getItem("players")) || [];
    renderPlayers(players);

});

let resetLeaderboardBtn = document.getElementsByClassName("resetLeaderBoard")[0];

if (resetLeaderboardBtn) {
    resetLeaderboardBtn.addEventListener("click", () => {
        localStorage.removeItem("players");
        location.reload(); // optional: refresh the page
    });
}

// obtain players

export const obtainPlayers = () => {
    return JSON.parse(localStorage.getItem("players")) || [];
};


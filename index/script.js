let playButton = document.getElementById("playButton");
let inputField = document.getElementById("inputName");

playButton.addEventListener("click", ()=> {

    if (inputField.value === "") {
        window.alert("Enter your name to proceed: ")
    } else {

        // obtain input value from input field.
        let inputName = inputField.value.trim();
        localStorage.setItem("playerName", inputName);
        
        let tableRow = document.createElement("tr");

        tableRow.innerHTML = `<td> ${inputName} </td> <td> 0 points </td>`;

        document.getElementById("leaderboardTable").appendChild(tableRow);

       //  window.location.href = "/game Modes/gameMode.html";
    }
});
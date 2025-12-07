let playButton = document.getElementById("playButton");
let inputField = document.getElementById("inputName");

const createNewPlayer = () => {

     // obtain input value from input field.
     let inputName = inputField.value.trim();
     localStorage.setItem("playerName", inputName);
     
     let tableRow = document.createElement("tr");

     let tableData = document.createElement("td");

     tableData.innerHTML = inputName;

     let span = document.createElement("span");
     
     span.classList.add("points");

     span.innerText = "0";

     // construct the element

     tableRow.appendChild(tableData);

     tableRow.appendChild(span);

     document.getElementById("leaderboardTable").appendChild(tableRow);

};

playButton.addEventListener("click", ()=> {

    if (inputField.value === "") {
        window.alert("Enter your name to proceed: ")
    } else {

        createNewPlayer();

       //  window.location.href = "/game Modes/gameMode.html";
    }
});
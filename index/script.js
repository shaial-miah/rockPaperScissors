let playButton = document.getElementById("playButton");
let inputField = document.getElementById("inputName");

playButton.addEventListener("click", ()=> {

    if (inputField.value === "") {
        window.alert("Enter your name to proceed: ")
    } else {
        window.location.href = "/game Modes/gameMode.html"
    }
});
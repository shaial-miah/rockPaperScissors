const selectRockButton = document.getElementById("selectRockBtn");
const selectPaperButton = document.getElementById("selectPaperBtn");
const selectScissorButton = document.getElementById("selectScissorBtn");

const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorIcon = document.getElementById("scissorIcon");

/* toggle selection for rock selection */
selectRockButton.addEventListener("click", () => {

    rockIcon.classList.toggle("selected");

});

/* toggle selection for paper selection */
selectPaperButton.addEventListener("click", () => {

    paperIcon.classList.toggle("selected");

});

/* toggle selection for scissor selection */
selectScissorButton.addEventListener("click", () => {

    scissorIcon.classList.toggle("selected");

});

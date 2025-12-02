const selectRockButton = document.getElementById("selectRockBtn");
const selectPaperButton = document.getElementById("selectPaperBtn");
const selectScissorButton = document.getElementById("selectScissorBtn");

const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorIcon = document.getElementById("scissorIcon");

// select 1 icon only

// first put all icons into an array
const icons = [rockIcon, paperIcon, scissorIcon];

const selectOneIconOnly = (icon) => {

    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.remove("selected");
    };
    
    icon.classList.toggle("selected");
};

selectRockButton.addEventListener("click", () => {

    selectOneIconOnly(rockIcon);

});

selectPaperButton.addEventListener("click", () => {

    selectOneIconOnly(paperIcon);

});

selectScissorButton.addEventListener("click", () => {

    selectOneIconOnly(scissorIcon);

});
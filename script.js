const body = document.querySelector("body");

const divContainer = document.createElement("div");
divContainer.className = "divContainer"

body.appendChild(divContainer);


const xInput = document.querySelector("#xlength");
const yInput = document.querySelector("#ylength");

const startButton = document.querySelector("#startButton");
startButton.addEventListener('click', () => {createSketchPad(xInput.value, yInput.value)});


//changes the div that the person hovered over to the colour black
function mouseHovered(id){
    box = document.querySelector("#" + id);
    box.style.backgroundColor = "black";
}

//creates the sketchpad with the inputed numbers
function createSketchPad(xLength, yLength){

    for (var i = 0; i < (xLength*yLength); i++){
        divBox = document.createElement("div");
        divBox.style.padding = (xLength / 10) + "px " + (yLength / 10) + "px";
        divBox.id = "box" + i;
        divBox.className = "box";
        divContainer.append(divBox);
    }
    
    const etches = divContainer.querySelectorAll("div");
    
    etches.forEach((etch) => {
        etch.addEventListener('mouseover', () => {mouseHovered(etch.id)});
     });
}



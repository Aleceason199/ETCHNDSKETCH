const body = document.querySelector("body");

const divContainer = document.createElement("div");
divContainer.className = "divContainer"

body.appendChild(divContainer);


const boxesInput = document.querySelector("#boxes");
const boxSizeInput = document.querySelector("#boxSize");

const startButton = document.querySelector("#startButton");
startButton.addEventListener('click', () => {createSketchPad(boxesInput.value, boxSizeInput.value)});


//changes the div that the person hovered over to the colour black
function mouseHovered(id){
    box = document.querySelector("#" + id);
    box.style.backgroundColor = "black";
}

//creates the sketchpad with the inputed numbers
function createSketchPad(boxes, boxSize){

    var etches = divContainer.querySelectorAll("div");
    etches.forEach((etch) => {
        etch.remove()
    });

    for (var i = 0; i < boxes; i++){
        divBox = document.createElement("div");
        divBox.style.padding = boxSize + "px " + boxSize + "px";
        divBox.id = "box" + i;
        divBox.className = "box";
        divContainer.append(divBox);
    }
    
    var etches = divContainer.querySelectorAll("div");
    
    etches.forEach((etch) => {
        etch.addEventListener('mouseover', () => {mouseHovered(etch.id)});
     });
}



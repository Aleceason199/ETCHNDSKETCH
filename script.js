const body = document.querySelector("body");
const divContainer = document.createElement("div");
divContainer.className = "divContainer"
body.appendChild(divContainer);


//inputs and button for start div
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

    //removes any containers for reset
    var etches = divContainer.querySelectorAll("div");
    etches.forEach((etch) => {
        etch.remove()
    });

    //creates the amount of boxes at the size and gives them each an id
    for (var i = 0; i < boxes; i++){
        divBox = document.createElement("div");
        divBox.style.padding = boxSize + "px " + boxSize + "px";
        divBox.id = "box" + i;
        divBox.className = "box";
        divContainer.append(divBox);
    }
    
    var etches = divContainer.querySelectorAll("div");
    
    //creates an event listener to change the color of a div when moused over
    etches.forEach((etch) => {
        etch.addEventListener('mouseover', () => {mouseHovered(etch.id)});
     });
}



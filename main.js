var numSquare = 6;
var colors = generateRandomColor(numSquare);
var square = document.querySelectorAll(".square");
var displayColor = document.querySelector("#display");
var pickedColor = pickColor();
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

resetButton.textContent = "New Game";

easyButton.addEventListener("click", function () {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquare = 3;
    colors = generateRandomColor(numSquare);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for (let index = 0; index < square.length; index++) {
        if (colors[index]) {
            square[index].style.backgroundColor = colors[index];
        } else {
            square[index].style.display = "none";
        }
    }

});

hardButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquare = 6;
    colors = generateRandomColor(numSquare); 
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for (let index = 0; index < square.length; index++) {

        square[index].style.backgroundColor = colors[index];
        square[index].style.display = "block";
    }

});

resetButton.addEventListener("click", function () {
    numSquare = 6;
    colors = generateRandomColor(numSquare);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;

    for (let index = 0; index < square.length; index++) {
        square[index].style.backgroundColor = colors[index];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = " ";
    resetButton.textContent = "New Game";
});

displayColor.textContent = pickedColor;

for (let index = 0; index < square.length; index++) {
    square[index].style.backgroundColor = colors[index];

    square[index].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            message.textContent = "CORRECT!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again!";
        } else {
            this.style.backgroundColor = "#121212";
            message.textContent = "TRY AGAIN";
        }
    });
}

function changeColors(color) {
    for (let index = 0; index < square.length; index++) {
        square[index].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    var arr = [];
    for (let index = 0; index < num; index++) {
        arr.push(randomColors())
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
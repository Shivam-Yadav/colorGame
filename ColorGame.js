var numOfSquares=6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage=document.getElementById("span");

var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares=3
    resetButton.textContent="New Colors";
    //generate random colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i])
            squares[i].style.background = colors[i];
        else
            squares[i].style.background="none";
    }
    h1.style.backgroundColor="blue";
})

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    resetButton.textContent="New Colors";
    //generate random colors
    numOfSquares=6;
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background="block";
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor="blue";
})

resetButton.addEventListener("click",function () {
    resetButton.textContent="New Colors";
    //generate random colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    displayMessage.textContent="Find the Answer";
    //change color of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.backgroundColor="blue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked squares
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            //alert("correct");
            resetButton.textContent="Play Again?";
            displayMessage.textContent="correct";
            changeColor(clickedColor);
            h1.style.backgroundColor=pickedColor;
        }
        else{
            this.style.background="black";
            displayMessage.textContent="try again";
        }


    });
}

function changeColor(color){
    for(var i = 0; i < colors.length; i++)
        squares[i].style.background=color;

}

function pickColor() {
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr=[];
    //add num random colors to array
    for(var i=0; i<num;i++)
      arr.push(randomColor()) ;
    //return the array
    return arr;
}

function randomColor() {
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    return "rgb("+red+", "+green+", "+blue+")";  //when we put in values, DOM automatically adds spaces
                                                 //so, even we have to ADD SPACE after ","
}
//Make the squares
// Borders for the squares
// Name each square using an id
// Make it to where it will console log when a square is clicked using event Listners.


//getting the boxes to change when clicked 
let currentPlayer= "X"

let title = document.getElementById("heading")
title.addEventListener("click", function() {
    title.style.color="blue"
})

let one = document.getElementById("1")
one.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    one.innerHTML=currentPlayer
})

let two = document.getElementById("2")
two.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "0" : "X";
    two.innerHTML=currentPlayer
})

let three = document.getElementById("3")
three.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    three.innerHTML=currentPlayer
})

let four = document.getElementById("4")
four.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    four.innerHTML=currentPlayer
})

let five = document.getElementById("5")
five.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    five.innerHTML=currentPlayer
})

let six = document.getElementById("6")
six.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    six.innerHTML=currentPlayer
})

let seven = document.getElementById("7")
seven.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    seven.innerHTML=currentPlayer
})

let eight = document.getElementById("8")
eight.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    eight.innerHTML=currentPlayer
})

let nine = document.getElementById("9")
nine.addEventListener("click", function() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    nine.innerHTML=currentPlayer
})

//rules of the game? 

winningCombos=[
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 5, 9], 
    [3, 5, 7], 
    [1, 4, 7],
    [2, 5, 8], 
    [2, 6, 9]
]
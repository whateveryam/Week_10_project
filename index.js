//Make the squares
// Borders for the squares
// Name each square using an id
// Make it to where it will console log when a square is clicked using event Listners.



//WHAT I NEED TO FIGURE OUT ------
//How to push specific plays to specific empty arrays (x and o)
//              I already have it pushing to the all plays array
//How to stop game when either x or o hits winning combo
//Show prompt of which player won the game
//Add reset function to my reset button
// Make it look nicer please thanks

let title = document.getElementById("heading")
title.addEventListener("click", function() {
    title.style.color="green"
})

//getting the boxes to change when clicked 
let currentPlayer= "X"
let playedSquares = [];
let playerXSquares = [];
let playerOSquares = [];

const winningCombos=[
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 5, 9], 
    [3, 5, 7], 
    [1, 4, 7],
    [2, 5, 8], 
    [2, 6, 9]
]

// for (let i=0; i < winningCombos.length; i++){
//     console.log(winningCombos[i]);
//     for (let x = 0; x < winningCombos[i].length; x++){
//         console.log(winningCombos[i][x]);
//     }
// }


// identify what changes with each one of the following and see how you can make it generic for a loop. 
// change the id with your variable i in the loop.

for (let i = 1; i <= 9 ; i++) {
let square = document.getElementById(i) 
square.addEventListener("click", function() {
    if (!playedSquares.includes(i)) {
    square.innerHTML=currentPlayer
    if (currentPlayer === 'X') {
        playerXSquares.push(i);
        console.log(playerXSquares);
    } else playerOSquares.push(i);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playedSquares.push(i)
    console.log(playerOSquares);

    }
})
}

function XWins () {
    for (let i=0; i < winningCombos.length; i++) {
        if (playerXSquares.includes(winningCombos[i][0]) && playerXSquares.includes(winningCombos[i][1]) && playerXSquares.includes(winningCombos[i][2])) {
            console.log('Player X wins!')
            return 
        } else console.log('It continues.....')
    }
}

XWins ();


// function checkWinner () {
// for (let i = 0; i < winningCombos.length; i++) {
//     if (playerXSquares.includes(winningCombos[i][0]) && playerXSquares.includes(winningCombos[i][1]) && playerXSquares.includes(winningCombos[i][2])) {
//         return console.log('Player X wins!!')
//     } else if (playerOSquares.includes(winningCombos[i][0]) && playerOSquares.includes(winningCombos[i][1]) && playerOSquares.includes(winningCombos[i][2])) {
//         return console.log('Player O wins!!')
// } else if (playedSquares.lengh === 9) {
//         return console.log('CATS!!')
// }

// } 
// }

// checkWinner ();
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


// for (let i=0; i < winningCombos.length; i++){
//     console.log(winningCombos[i]);
//     for (let x = 0; x < winningCombos[i].length; x++){
//         console.log(winningCombos[i][x]);
//     }
// }


// identify what changes with each one of the following and see how you can make it generic for a loop. 
// change the id with your variable i in the loop.

// for (let i = 1; i <= 9 ; i++) {
// let square = document.getElementById(i) 
// square.addEventListener("click", function() {
//     if (!playedSquares.includes(i)) {
//     square.innerHTML=currentPlayer
//     if (currentPlayer === 'X') {
//         playerXSquares.push(i);
//         console.log(playerXSquares);
//     } else playerOSquares.push(i);
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     playedSquares.push(i)
//     console.log(playerOSquares);

//     }
// })
// }

// function PlayerXWins () {
//     for (let i=0; i < winningCombos.length; i++) {
//         if (playerXSquares.includes(winningCombos[i][0]) && playerXSquares.includes(winningCombos[i][1]) && playerXSquares.includes(winningCombos[i][2])) {
//             alert ('Player X wins!');
//     }
// }}

// PlayerXWins ();


// function checkWinner () {
// for (let i = 0; i < winningCombos.length; i++) {
//     if (playerXSquares.includes(winningCombos[i][0]) && playerXSquares.includes(winningCombos[i][1]) && playerXSquares.includes(winningCombos[i][2])) {
//         return 'Player X wins!!'
//     } else if (playerOSquares.includes(winningCombos[i][0]) && playerOSquares.includes(winningCombos[i][1]) && playerOSquares.includes(winningCombos[i][2])) {
//         return 'Player O wins!!'
// } else if (playedSquares.lengh === 9) {
//         return 'CATS!!'
// }

// } 
// }
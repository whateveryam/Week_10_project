let title = document.getElementById("heading")
title.addEventListener("click", function() {
    title.style.color="blue"
})

//getting all cells named square
//stating which player starts so we can later alternate
//empty array for moves, 9 for each square
//boolean to help later indicate if the game is over 
const square = document.querySelectorAll(".square");
let currentPlayer= "X";
let options = ["","","","","","","","",""];
let running = false;

const winningCombos=[
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
    [0, 3, 6],
    [1, 4, 7], 
    [1, 5, 8]
]

startGame();


function startGame(){
    square.forEach((square, index) => {
        square.addEventListener("click", squareClicked);
        square.setAttribute("squareIndex", index);
    });

    restartButton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function squareClicked(){
    const squareIndex = this.getAttribute("squareIndex");

    if(options[squareIndex] != "" || !running){
        return;
    }

    updateSquare(this, squareIndex);
    checkWinner();
}

function updateSquare(square, index){
    options[index] = currentPlayer;
    square.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winningCombos.length; i++){
        const condition = winningCombos[i];
        const squareA = options[condition[0]];
        const squareB = options[condition[1]];
        const squareC = options[condition[2]];

        if(squareA == "" || squareB == "" || squareC == ""){
            continue;
        }
        if(squareA == squareB && squareB == squareC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Cats!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    square.forEach(square => square.textContent = "");
    running = true;
}
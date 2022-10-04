document.querySelectorAll('.tile').forEach((tile)=> tile.addEventListener('click', handleTileClick))
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".btmtxt");

let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const drawMessage = () => "Game has ended in a draw";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!`;
const winMessage = () => `Player${currentPlayer} has won!`;


const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];



function handleTile(tileClick, tileIndex) {
  gameBoard[tileIndex] = currentPlayer; // might be [i]
  tileClick.innerText = currentPlayer;
console.log(gameBoard)
}

function handlePlayerChange() {
  currentPlayer === "X" ? "O" : "X"
  announcer.innerText = currentPlayerTurn();
} 

function handleResultValidtaion() {
  let roundWon = false;
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i]; // winCondition is = to all possible winning outcomes in the winningConditions array 
    
    let a = gameBoard[winCondition[0]];
  
    let b = gameBoard[winCondition[1]];
    console.log(a, b, c);
    let c = gameBoard[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      console.log(roundWon)
      break;
    }
  }
  if (roundWon) {
    announcer.innerHTML = winMessage();
    isGameActive = false;
    return;
  }
  let draw = !gameBoard.includes('')
  if (draw) {
    announcer.innerText = drawMessage();
    console.log('It\'s a draw!')
    isGameActive = false;
    return;
  }
  handlePlayerChange();
}


announcer.innerText = currentPlayerTurn();

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  announcer.innerText = currentPlayerTurn(); // this is whats showing at the bottom
}

const updateBoard = (index) => {
  gameBoard[index] = currentPlayer;
};

// const isValid = (tile) => {
  //   if (tile.innerText === "X" || tile.innerText === "O") {
    //     return false;
    //   }
//   return true;
// };


function checkWinner() {
  changePlayer()
}


function handleTileClick(e) {
  let tileClick = e.target;
  let tileIndex = parseInt(tileClick.dataset.index);
  if (gameBoard[tileIndex] !== "" || !isGameActive) {
    return;
  }
  handleTile(tileClick, tileIndex);
  checkWinner();
  if (currentPlayer == "X") {
    e.target.style.background = "pink";
  } else {
    e.target.style.background = "white";
  }
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  isGameActive = true;
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  announcer.innerText = currentPlayerTurn();
  document.querySelectorAll('.tile').forEach((tile) => (tile.innerHTML = '', tile.style.background = "grey"))


}


document.querySelectorAll('.tile').forEach((tile)=> tile.addEventListener('click', handleTileClick))
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");

let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningCondition = [
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
  gameBoard[tileIndex] = currentPlayer;
  tileClick.innerHTML = currentPlayer;
}

const playerTurn = () => `It's ${currentPlayer}'s turn`;

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  announcer.innerHTML = playerTurn();
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

const winMessage = () => `player${currentPlayer} has won!`;

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < winningCondition.length; i++) {
    let winCondition = winningCondition[i];
    console.log(winCondition)
    let a = gameBoard[winCondition[0]];
    console.log(a)
    let b = gameBoard[winCondition[1]];
    console.log(b)
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
    console.log(`Player ${currentPlayer} is the winner!`)
    announcer.innerHTML = winMessage();
    isGameActive = false;
    return;
  }
  let draw = !gameBoard.includes('')
  if (draw) {
    console.log('It\'s a draw!')
    isGameActive = false;
    return;
  }
  changePlayer()
}
function handleTileClick(e) {
  let tileClick = e.target;
  let tileIndex = parseInt(tileClick.dataset.index);
  console.log(tileIndex);
  if (gameBoard[tileIndex] !== "" || !isGameActive) {
    return;
  }
  handleTile(tileClick, tileIndex);
  checkWinner();
}

resetButton.addEventListener("click", resetGame);

function resetGame() {
  isGameActive = true;
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.tile').forEach((tile) => (tile.innerHTML = ''))
  // reset announcer 
}


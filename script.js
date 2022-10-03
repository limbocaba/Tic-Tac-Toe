
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const playerDisplay = document.querySelector('.display-player');
  const resetButton = document.querySelector('#reset');
  const announcer = document.querySelector('.announcer')

  let board = ['', '', '', '', '', '', '', '', '']
  let currentPlayer = 'X';
  let isGameActive = true; 

  // const PLAYERX_WON = 'PLAYERX_WON';
  // const PLAYERO_WON = 'PLAYERO_WON';
  // const TIE = 'TIE';

  // Indexes inside the board 
  // [0][1][2]
  // [4][5][6]
  // [7][8][9]
  
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

tiles.forEach(tile => {
    tile.addEventListener("click", handleClick)
})
  
function handleClick(e) {
  if (currentPlayer == "X") {
    e.target.style.background = "red"
  } else {
    e.target.style.background = "blue"
  }

  e.target.innerText = currentPlayer

  // check for winner
  checkWinner(e)

  // change player
  changePlayer()
}

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X"
}

function checkWinner(e) {
  console.log(e.target.dataset.index)
  let index = e.target.dataset.index
  board[index] = currentPlayer
  console.log(board)
  winningCondition.forEach((win) => {
    let a = win[0]
    let b = win[1]
    let c = win[2]
  })
}

resetButton.addEventListener('click', resetGame)

function resetGame() {
  console.log("reset")
  }


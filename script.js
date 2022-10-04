const tiles = Array.from(document.querySelectorAll(".tile"));
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;


 const PLAYERX_WON = 'PLAYERX_WON';
  const PLAYERO_WON = 'PLAYERO_WON';
  const TIE = 'TIE';


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
  [2, 4, 6],
];

tiles.forEach((tile) => {
  tile.addEventListener("click", handleClick);
});

function handleClick(e) {
  if (currentPlayer == "X") {
    e.target.style.background = "red";
  } else {
    e.target.style.background = "blue";
  }

  e.target.innerText = currentPlayer;

  // check for winner
  checkWinner(e);

  // change player
  changePlayer();
}

const announce = (type) => {
  switch (type) {
    case PLAYERO_WON:
      announcer.innerHTML = 'Player <span class="playerO"></span> Won'
      break;
    case PLAYERX_WON:
      announcer.innerHTML = 'Player <span class"playerX"</span> Won'
      break;
    case TIE: 
      announcer.innerText = 'Tie'
  }
  announcer.classList.remove('hide')
}


function changePlayer() {
  playerDisplay.classList.remove(`player${currentPlayer}`);
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  playerDisplay.innerText = currentPlayer;
  playerDisplay.classList.add(`player${currentPlayer}`);
}


const updateBoard = (index) => {
  board[index] = currentPlayer;
}

const isValid = (tile) => {
  if (tile.innerText === 'X' || tile.innerText === 'O') {
    return false;
  }
  return true;
};  

function resetGame() {
  board = ['', '', '', '', '', '', '', '', '']
  isGameActive = true;
  announcer.classList.add('hide');

  if (currentPlayer === 'O') {
    changePlayer()
  }

  tiles.forEach(tile => {
    tile.innerText = ''
    tile.classList.remove('playerX')
    tile.classList.remove('playerO')
    
  });
}

function checkWinner(e) {
  console.log(e.target.dataset.index);
  let index = e.target.dataset.index;
  board[index] = currentPlayer;
  let roundWon = false;
  // console.log(board);
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningCondition[i]
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];

    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
    if (roundWon) {
      announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }
    if (!board.includes('')) {
      announce(TIE)
    }
  }
  };


resetButton.addEventListener("click", resetGame);

function resetGame() {
  console.log("reset");
}

const gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  function setMark(index, mark) {
    if (board[index] === "") {
      board[index] = mark;
    } else {
      console.log("PERDISTE EL TURNO POR BOBO");
    }
  }

  function getBoard() {
    return board;
  }

  function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
  }

  return { getBoard, setMark, resetBoard };
})();

const player = (name, mark) => {
  return { name, mark };
};

const game = (function () {
  const playBtn = document.querySelector(".play-btn");
  const winnerDisplay = document.querySelector("#winner-display");

  let player1;
  let player2;
  let activePlayer;

  const displayPlayers = () => {
    const playersDisplay = document.querySelector(".players-display");
    const playersText = document.createElement("p");
    playersDisplay.appendChild(playersText);
    playersText.innerHTML = `<p>${player1.name} VS ${player2.name}</p>`;
    playersText.classList.add("players-text");
  };

  playBtn.addEventListener("click", () => {
    document.querySelector(".player-setup").classList.add("hidden");
    document.querySelector(".board-container").classList.remove("hidden");

    const p1Input = document.querySelector("#p1");
    const p2Input = document.querySelector("#p2");

    player1 = player(p1Input.value, "X");
    player2 = player(p2Input.value, "O");
    activePlayer = player1;

    displayPlayers();
  });

  const checkWin = () => {
    const currentBoard = gameboard.getBoard();

    if (
      (currentBoard[0] === player1.mark &&
        currentBoard[1] === player1.mark &&
        currentBoard[2] === player1.mark) ||
      (currentBoard[0] === player1.mark &&
        currentBoard[3] === player1.mark &&
        currentBoard[6] === player1.mark) ||
      (currentBoard[0] === player1.mark &&
        currentBoard[4] === player1.mark &&
        currentBoard[8] === player1.mark) ||
      (currentBoard[1] === player1.mark &&
        currentBoard[4] === player1.mark &&
        currentBoard[7] === player1.mark) ||
      (currentBoard[2] === player1.mark &&
        currentBoard[5] === player1.mark &&
        currentBoard[8] === player1.mark) ||
      (currentBoard[2] === player1.mark &&
        currentBoard[4] === player1.mark &&
        currentBoard[6] === player1.mark) ||
      (currentBoard[3] === player1.mark &&
        currentBoard[4] === player1.mark &&
        currentBoard[5] === player1.mark) ||
      (currentBoard[6] === player1.mark &&
        currentBoard[7] === player1.mark &&
        currentBoard[8] === player1.mark)
    ) {
      winnerDisplay.textContent = `Ganó ${player1.name}`;
      gameboard.resetBoard();
    } else if (
      (currentBoard[0] === player2.mark &&
        currentBoard[1] === player2.mark &&
        currentBoard[2] === player2.mark) ||
      (currentBoard[0] === player2.mark &&
        currentBoard[3] === player2.mark &&
        currentBoard[6] === player2.mark) ||
      (currentBoard[0] === player2.mark &&
        currentBoard[4] === player2.mark &&
        currentBoard[8] === player2.mark) ||
      (currentBoard[1] === player2.mark &&
        currentBoard[4] === player2.mark &&
        currentBoard[7] === player2.mark) ||
      (currentBoard[2] === player2.mark &&
        currentBoard[5] === player2.mark &&
        currentBoard[8] === player2.mark) ||
      (currentBoard[2] === player2.mark &&
        currentBoard[4] === player2.mark &&
        currentBoard[6] === player2.mark) ||
      (currentBoard[3] === player2.mark &&
        currentBoard[4] === player2.mark &&
        currentBoard[5] === player2.mark) ||
      (currentBoard[6] === player2.mark &&
        currentBoard[7] === player2.mark &&
        currentBoard[8] === player2.mark)
    ) {
      winnerDisplay.textContent = `Ganó ${player2.name}`;
      gameboard.resetBoard();
    } else if (!currentBoard.includes("")) {
      winnerDisplay.textContent = `¡EMPATE!`;
    }
  };

  const playTurn = (cellIndex) => {
    if (activePlayer === player1) {
      gameboard.setMark(cellIndex, player1.mark);
      activePlayer = player2;
    } else {
      gameboard.setMark(cellIndex, player2.mark);
      activePlayer = player1;
    }
    checkWin();
  };

  return { playTurn };
})();

const displayController = (function () {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      game.playTurn(index);
      const boardState = gameboard.getBoard();
      updateDisplay.renderBoard(cells, boardState);
    });
  });
})();

const updateDisplay = (function () {
  const renderBoard = (cells, boardState) => {
    cells.forEach((cell, index) => {
      cell.textContent = boardState[index];
    });
  };

  return { renderBoard };
})();

const gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  function setMark(indice, ficha) {
    board[indice] = ficha;
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
  // código del juego

  const player1 = player("El pejelagarto", "X");
  const player2 = player("El Gordo Mutante", "O");

  let jugadorActivo = player1;

  const jugarTurno = (casilla) => {
    if (jugadorActivo === player1) {
      gameboard.setMark(casilla, player1.mark);
      jugadorActivo = player2;
    } else {
      gameboard.setMark(casilla, player2.mark);
      jugadorActivo = player1;
    }

    console.log(gameboard.getBoard());
  };

  return { jugarTurno };
})();

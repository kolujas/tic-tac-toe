const gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];

  function setMark(indice, ficha) {
    if (board[indice] === "") {
      board[indice] = ficha;
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
  // código del juego

  const player1 = player("El pejelagarto", "X");
  const player2 = player("El Gordo Mutante", "O");

  let jugadorActivo = player1;

  const comprobarVictoria = () => {
    const tableroActual = gameboard.getBoard();

    if (
      (tableroActual[0] === player1.mark &&
        tableroActual[1] === player1.mark &&
        tableroActual[2] === player1.mark) ||
      (tableroActual[0] === player1.mark &&
        tableroActual[3] === player1.mark &&
        tableroActual[6] === player1.mark) ||
      (tableroActual[0] === player1.mark &&
        tableroActual[4] === player1.mark &&
        tableroActual[8] === player1.mark) ||
      (tableroActual[1] === player1.mark &&
        tableroActual[4] === player1.mark &&
        tableroActual[7] === player1.mark) ||
      (tableroActual[2] === player1.mark &&
        tableroActual[5] === player1.mark &&
        tableroActual[8] === player1.mark) ||
      (tableroActual[2] === player1.mark &&
        tableroActual[4] === player1.mark &&
        tableroActual[6] === player1.mark) ||
      (tableroActual[3] === player1.mark &&
        tableroActual[4] === player1.mark &&
        tableroActual[5] === player1.mark) ||
      (tableroActual[6] === player1.mark &&
        tableroActual[7] === player1.mark &&
        tableroActual[8] === player1.mark)
    ) {
      console.log(`Ganó el forro de ${player1.name}`);
    } else if (
      (tableroActual[0] === player2.mark &&
        tableroActual[1] === player2.mark &&
        tableroActual[2] === player2.mark) ||
      (tableroActual[0] === player2.mark &&
        tableroActual[3] === player2.mark &&
        tableroActual[6] === player2.mark) ||
      (tableroActual[0] === player2.mark &&
        tableroActual[4] === player2.mark &&
        tableroActual[8] === player2.mark) ||
      (tableroActual[1] === player2.mark &&
        tableroActual[4] === player2.mark &&
        tableroActual[7] === player2.mark) ||
      (tableroActual[2] === player2.mark &&
        tableroActual[5] === player2.mark &&
        tableroActual[8] === player2.mark) ||
      (tableroActual[2] === player2.mark &&
        tableroActual[4] === player2.mark &&
        tableroActual[6] === player2.mark) ||
      (tableroActual[3] === player2.mark &&
        tableroActual[4] === player2.mark &&
        tableroActual[5] === player2.mark) ||
      (tableroActual[6] === player2.mark &&
        tableroActual[7] === player2.mark &&
        tableroActual[8] === player2.mark)
    ) {
      console.log(`Ganó el forro de ${player2.name}`);
    }
  };

  const jugarTurno = (casilla) => {
    if (jugadorActivo === player1) {
      gameboard.setMark(casilla, player1.mark);
      jugadorActivo = player2;
    } else {
      gameboard.setMark(casilla, player2.mark);
      jugadorActivo = player1;
    }

    console.log(gameboard.getBoard());

    comprobarVictoria();
  };

  return { jugarTurno, comprobarVictoria };
})();

# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with vanilla JavaScript, HTML, and CSS, focusing on clean architecture and Object-Oriented principles. This project is a core assignment from **The Odin Project's** full-stack curriculum.

## Live Demo

[**Click here to play the game!**](https://vercel)

## Project Overview

This project implements a fully functional Tic-Tac-Toe game where two players can compete. The primary goal was to structure the application logic using modules and factory functions to create a clear separation of concerns, keeping the global namespace clean and the codebase organized and scalable.

## Features

- **Dynamic Player Creation:** Input fields to set custom names for Player 1 (X) and Player 2 (O).
- **Interactive Game Board:** Players can click on the grid to place their marks.
- **Turn-Based Logic:** The game correctly alternates turns between players.
- **Win & Tie Detection:** The application accurately detects all winning conditions (horizontal, vertical, and diagonal) as well as tie games.
- **Game State Display:** The UI provides clear feedback on the current players and announces the winner or a tie.
- **Restart Logic:** The game board resets after a win or tie, ready for a new match (implicitly, by refreshing is not the best, but it works for now!).

## Built With

- **HTML5:** For the core structure of the game.
- **CSS3:** For styling and layout, leveraging **CSS Grid** and **Flexbox** for a responsive design.
- **Vanilla JavaScript (ES6+):** For all game logic and DOM manipulation.

## Key Concepts Implemented

This project was a deep dive into fundamental software architecture principles:

### 1. **Module Pattern (IIFE)**

The entire application is organized into self-contained modules using Immediately Invoked Function Expressions (IIFEs). This encapsulates logic, prevents global scope pollution, and creates private and public members. The main modules are:

- `gameboard`: Manages the state of the board (the "invisible array").
- `game`: Controls the flow of the game, player turns, and win-checking logic.
- `displayController`: Handles all direct interaction with the DOM (event listeners).
- `updateDisplay`: Responsible for rendering the game state to the screen.

### 2. **Factory Functions**

Player objects are created using a simple `player` factory function. This allows for easy and clean instantiation of multiple player objects with their own `name` and `mark`.

### 3. **Single Responsibility Principle**

Each module and function is designed to have one specific job. For example:

- The `game` module doesn't know how to draw on the screen; it only knows the rules.
- The `updateDisplay` module doesn't know the rules of the game; it only knows how to paint the board based on the data it receives.

This separation makes the code easier to understand, debug, and maintain.

## How to Run Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/kolujAs/tic-tac-toe.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd YOUR_REPO_NAME
    ```
3.  Open the `index.html` file in your favorite web browser.

## Future Improvements

- [ ] Implement a "Restart Game" button to allow for new matches without a page refresh.
- [ ] Add a score-keeping feature.
- [ ] Refactor the win-checking logic into a more concise, loop-based function.
- [ ] Build a simple AI opponent using the minimax algorithm.

## Acknowledgements

- This project is part of the curriculum from **The Odin Project**.
- A huge thanks to my mentor "Gordosaurio" for the relentless sparring sessions and guidance through the fires of the forge.

import {
    turn,
} from "./turn_actions.js";
import {
    selectResult,
} from "./score.js";

let playerOne = false;
let playerTwo = false;
let click = 0;
let turnStart = true;
let nextPlayer = false;

const getDieOne = document.querySelector("button#die-one");
const getDieTwo = document.querySelector("button#die-two");
const getDieThree = document.querySelector("button#die-three");
const getDieFour = document.querySelector("button#die-four");
const getDieFive = document.querySelector("button#die-five");

const mainButton = document.querySelector("button.main-button");
const gameExplanation = document.querySelector(".game-explanation");

const grandTotalPlayerOne = document.querySelector("#grand-total-player-one-input");
const playerOneInput = document.querySelectorAll(".player-one-input");
const buttonPlayerOneTotalUpperSection = document.querySelector("#total-of-upper-section-player-one-input");
const buttonPlayerOneTotalLowerSection = document.querySelector("#total-of-lower-section-player-one-input");
const buttonPlayerOneTotal = document.querySelector("#total-player-one-input");
const buttonPlayerOneBonus = document.querySelector("#bonus-player-one-input");

mainButton.addEventListener("click", () => {
    if (gameExplanation.textContent === "Press Reset Game to Start Again") {
        for (let i = 0; i < playerOneInput.length; i++) {
            playerOneInput[i].textContent = "";
        }
        grandTotalPlayerOne.textContent = "";
        buttonPlayerOneTotalUpperSection.textContent = "";
        buttonPlayerOneTotalLowerSection.textContent = "";
        buttonPlayerOneTotal.textContent = "";
        buttonPlayerOneBonus.textContent = "";

        playerOne = false;
        playerTwo = false;
        click = 0;
    }
    if (mainButton.textContent === "Next Player") {
        getDieOne.textContent = 1;
        getDieTwo.textContent = 1;
        getDieThree.textContent = 1;
        getDieFour.textContent = 1;
        getDieFive.textContent = 1;
    }
    click++;
    mainButton.textContent = "Roll Dice";
    nextPlayer = false;
    /* player one starts the game */
    if (click === 1) {
        gameExplanation.textContent = "Player 1 Turn";
    }

    /* start game */
    if (click === 2) {
        playerOne = true;
    } 
    /* player one switch */
    if (playerTwo && !turnStart) {
        playerOne = true;
        playerTwo = false;
        turnStart = true;
        nextPlayer = true;
        gameExplanation.textContent = "Player 1 Turn";
        selectResult();
        if (grandTotalPlayerOne.textContent > 0) {
            gameExplanation.textContent = "Press Reset Game to Start Again";
            mainButton.textContent = "Reset Game";
        }
    /* player two switch */
    } else if (playerOne && !turnStart) {
        playerOne = false;
        playerTwo = true;
        turnStart = true;
        nextPlayer = true;
        gameExplanation.textContent = "Player 2 Turn";
        selectResult();
        if (grandTotalPlayerOne.textContent > 0) {
            gameExplanation.textContent = "Press Reset Game to Start Again";
            mainButton.textContent = "Reset Game";
        }
    } 
    /* player one turn */
    if (playerOne && turnStart && !nextPlayer) {
        turnStart = turn();
    } 
    /* player two turn */
    else if (playerTwo && turnStart && !nextPlayer) {
        turnStart =  turn();
    }
});

export {
    mainButton,
};

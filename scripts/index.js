import {
    turn,
} from "./turn_actions.js";

let playerOne = false;
let playerTwo = false;
let click = 0;
let turnStart = true;
let nextPlayer = false;
const mainButton = document.querySelector("button.main-button");
mainButton.addEventListener("click", () => {
    mainButton.textContent = "Roll Dice";
    click++;
    nextPlayer = false;
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
    /* player two switch */
    } else if (playerOne && !turnStart) {
        playerOne = false;
        playerTwo = true;
        turnStart = true;
        nextPlayer = true;
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

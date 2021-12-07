import {
    fiveDice,
 } from "./data.js";

function turn() {
    let randomNumber;
    function rollDice() {
        randomNumber = Math.floor((Math.random() * 6) + 1);
        return randomNumber;
    }

    function rollDiceFirstTime() {
    const input = prompt("To roll dice press ok");
        if (input === "") {
            fiveDice.diceOne = 6;
            fiveDice.diceTwo = 2;
            fiveDice.diceThree = 3;
            fiveDice.diceFour = 4;
            fiveDice.diceFive = 5;
        }
    }

    function rollDiceAgain() {
    const input = prompt("To roll dice type in dicenumber");
        if (input === "diceOne") {
            fiveDice.diceOne = rollDice();
        } else if (input === "diceTwo") {
            fiveDice.diceTwo = rollDice();
        } else if (input === "diceThree") {
            fiveDice.diceThree = rollDice();
        } else if (input === "diceFour") {
            fiveDice.diceFour = rollDice();
        } else if (input === "diceFive") {
            fiveDice.diceFive = rollDice();
        }
    }

    rollDiceFirstTime();
    console.log(fiveDice);
    rollDiceAgain();
    console.log(fiveDice);
    rollDiceAgain();
    console.log(fiveDice);
    return fiveDice;
}

export default turn;

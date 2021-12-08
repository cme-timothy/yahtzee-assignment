import {
    fiveDice,
 } from "./data.js";

function turn() {
    let randomNumber;
    function rollDie() {
        randomNumber = Math.floor((Math.random() * 6) + 1);
        return randomNumber;
    }

    function rollDiceFirstTime() {
    const input = prompt("To roll dice press ok");
        if (input === "") {
            fiveDice.dieOne = rollDie();
            fiveDice.dieTwo = rollDie();
            fiveDice.dieThree = rollDie();
            fiveDice.dieFour = rollDie();
            fiveDice.dieFive = rollDie();
        }
    }

    function rollDiceAgain() {
    const input = prompt("To roll a die type in die number");
        if (input === "dieOne") {
            fiveDice.dieOne = rollDie();
        } else if (input === "dieTwo") {
            fiveDice.dieTwo = rollDie();
        } else if (input === "dieThree") {
            fiveDice.dieThree = rollDie();
        } else if (input === "dieFour") {
            fiveDice.dieFour = rollDie();
        } else if (input === "dieFive") {
            fiveDice.dieFive = rollDie();
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

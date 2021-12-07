import {
    fiveDice,
} from "./data.js";
import turn from "./dice_roll.js";

/* start game */
const input = prompt("To start game press ok");
if (input === "") {
    turn();
}

/* summation of dice roll */
let diceSummation = 0;
const fiveDiceArray = Object.values(fiveDice);
function sumOfDice(sum) {
    return sum = fiveDiceArray.reduce((previous, current) => previous + current);
}

diceSummation = sumOfDice(diceSummation);

export {
    fiveDiceArray,
    diceSummation,
};

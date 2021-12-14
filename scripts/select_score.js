import {
    playerOneScoreUpperSection,
    playerOneScoreLowerSection,
    playerTwoScoreUpperSection,
    playerTwoScoreLowerSection,
} from "./data.js";

const playerOneInput = document.querySelectorAll(".player-one-input");

const buttonPlayerOneAces = document.querySelector("#aces-player-one-input");
const buttonPlayerOneTwos = document.querySelector("#twos-player-one-input");
const buttonPlayerOneThrees = document.querySelector("#threes-player-one-input");
const buttonPlayerOneFours = document.querySelector("#fours-player-one-input");
const buttonPlayerOneFives = document.querySelector("#fives-player-one-input");
const buttonPlayerOneSixes = document.querySelector("#sixes-player-one-input");

function selectResult(onTest) {
    if (onTest){
        buttonPlayerOneAces.addEventListener("click", acesResult);
        buttonPlayerOneTwos.addEventListener("click", twosResult);
        buttonPlayerOneThrees.addEventListener("click", threesResult);
        buttonPlayerOneFours.addEventListener("click", foursResult);
        buttonPlayerOneFives.addEventListener("click", fivesResult);
        buttonPlayerOneSixes.addEventListener("click", sixesResult);

    /* scoring tests */
    let upperSectionScoreArray = [];
    let values = Object.values(playerOneScoreUpperSection);
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== -1) {
        upperSectionScoreArray.push(values[i]);
        }
    }
    const buttonPlayerOneTotalUpperSection = document.querySelector("#total-upper-player-one-input");
    const buttonPlayerOneBonus = document.querySelector("#bonus-player-one-input");
    if (upperSectionScoreArray.length === 6) {
        const sum = upperSectionScoreArray.reduce(function(a, b) { return a + b });
        buttonPlayerOneTotalUpperSection.textContent = sum;
        if (sum >= 63) {
            buttonPlayerOneBonus.textContent = 35;
        } else {
            buttonPlayerOneBonus.textContent = 0;
        }

    }

    } else if (!onTest) {
    buttonPlayerOneAces.removeEventListener("click", acesResult);
    buttonPlayerOneTwos.removeEventListener("click", twosResult);
    buttonPlayerOneThrees.removeEventListener("click", threesResult);
    buttonPlayerOneFours.removeEventListener("click", foursResult);
    buttonPlayerOneFives.removeEventListener("click", fivesResult);
    buttonPlayerOneSixes.removeEventListener("click", sixesResult);
    }
}


function acesResult() {
    if (playerOneScoreUpperSection.aces === -1 && playerOneInput[0].textContent !== "") {
        playerOneScoreUpperSection.aces = parseFloat(buttonPlayerOneAces.textContent);
        for (let i = 1; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneAces.textContent = `[ ${playerOneScoreUpperSection.aces} ]`;
    }
}
function twosResult() {
    if (playerOneScoreUpperSection.twos === -1 && playerOneInput[1].textContent !== "") {
        playerOneScoreUpperSection.twos = parseFloat(buttonPlayerOneTwos.textContent);
        for (let i = 1; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        if (playerOneInput[0].textContent.endsWith("]") === false) {
        playerOneInput[0].textContent = "";
        }
        buttonPlayerOneTwos.textContent = `[ ${playerOneScoreUpperSection.twos} ]`;
    }
}
function threesResult() {
    if (playerOneScoreUpperSection.threes === -1 && playerOneInput[2].textContent !== "") {
        playerOneScoreUpperSection.threes = parseFloat(buttonPlayerOneThrees.textContent);
        for (let i = 2; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 1; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneThrees.textContent = `[ ${playerOneScoreUpperSection.threes} ]`;
    }
}
function foursResult() {
    if (playerOneScoreUpperSection.fours === -1 && playerOneInput[3].textContent !== "") {
        playerOneScoreUpperSection.fours = parseFloat(buttonPlayerOneFours.textContent);
        for (let i = 3; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 2; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneFours.textContent = `[ ${playerOneScoreUpperSection.fours} ]`;
    }
}
function fivesResult() {
    if (playerOneScoreUpperSection.fives === -1 && playerOneInput[4].textContent !== "") {
        playerOneScoreUpperSection.fives = parseFloat(buttonPlayerOneFives.textContent);
        for (let i = 4; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 3; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneFives.textContent = `[ ${playerOneScoreUpperSection.fives} ]`;
    }
}
function sixesResult() {
    if (playerOneScoreUpperSection.sixes === -1 && playerOneInput[5].textContent !== "") {
        playerOneScoreUpperSection.sixes = parseFloat(buttonPlayerOneSixes.textContent);
        for (let i = 5; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 4; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneSixes.textContent = `[ ${playerOneScoreUpperSection.sixes} ]`;
    }
}

export {
    selectResult,
};
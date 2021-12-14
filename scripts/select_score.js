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

const buttonPlayerOneThreeOfAKind = document.querySelector("#three-of-a-Kind-player-one-input");
const buttonPlayerOneFourOfAKind = document.querySelector("#four-of-a-Kind-player-one-input");
const buttonPlayerOneFullHouse = document.querySelector("#full-house-player-one-input");
const buttonPlayerOneLowStraight = document.querySelector("#low-straight-player-one-input");
const buttonPlayerOneHighStraight = document.querySelector("#high-straight-player-one-input");
const buttonPlayerOneYahtzee = document.querySelector("#yahtzee-player-one-input");
const buttonPlayerOneChance = document.querySelector("#chance-player-one-input");

function selectResult(onTest) {
    if (onTest){
        buttonPlayerOneAces.addEventListener("click", acesResult);
        buttonPlayerOneTwos.addEventListener("click", twosResult);
        buttonPlayerOneThrees.addEventListener("click", threesResult);
        buttonPlayerOneFours.addEventListener("click", foursResult);
        buttonPlayerOneFives.addEventListener("click", fivesResult);
        buttonPlayerOneSixes.addEventListener("click", sixesResult);

        buttonPlayerOneThreeOfAKind.addEventListener("click", threeOfAKindResult);
        buttonPlayerOneFourOfAKind.addEventListener("click", fourOfAKindResult);
        buttonPlayerOneFullHouse.addEventListener("click", fullHouseResult);
        buttonPlayerOneLowStraight.addEventListener("click", lowStraightResult);
        buttonPlayerOneHighStraight.addEventListener("click", highStraightResult);
        buttonPlayerOneYahtzee.addEventListener("click", yahtzeeResult);
        buttonPlayerOneChance.addEventListener("click", chanceResult);

    /* scoring tests upper section */
    let upperSectionScoreArray = [];
    let valuesUpperSection = Object.values(playerOneScoreUpperSection);
    for (let i = 0; i < valuesUpperSection.length; i++) {
        if (valuesUpperSection[i] !== -1) {
        upperSectionScoreArray.push(valuesUpperSection[i]);
        }
    }
    const buttonPlayerOneTotalUpperSection = document.querySelector("#total-of-upper-section-player-one-input");
    const buttonPlayerOneTotal = document.querySelector("#total-player-one-input");
    const buttonPlayerOneBonus = document.querySelector("#bonus-player-one-input");
    if (upperSectionScoreArray.length === 6) {
        const sumHigherSection = upperSectionScoreArray.reduce(function(a, b) { return a + b });
        buttonPlayerOneTotal.textContent = sumHigherSection;
        if (sumHigherSection >= 63) {
            buttonPlayerOneBonus.textContent = 35;
            buttonPlayerOneTotalUpperSection.textContent = sumHigherSection + 35;
        } else {
            buttonPlayerOneBonus.textContent = 0;
            buttonPlayerOneTotalUpperSection.textContent = sumHigherSection;
        }

    }
    /* scoring tests lower section */
    let lowerSectionScoreArray = [];
    let valuesLowerSection = Object.values(playerOneScoreLowerSection);
    for (let i = 0; i < valuesLowerSection.length; i++) {
        if (valuesLowerSection[i] !== -1) {
        lowerSectionScoreArray.push(valuesLowerSection[i]);
        }
    }
    const buttonPlayerOneTotalLowerSection = document.querySelector("#total-of-lower-section-player-one-input");
    if (lowerSectionScoreArray.length === 7) {
        const sumlowerSection = lowerSectionScoreArray.reduce(function(a, b) { return a + b });
        buttonPlayerOneTotalLowerSection.textContent = sumlowerSection;
    }
    const grandTotalPlayerOne = document.querySelector("#grand-total-player-one-input");
    if (parseFloat(buttonPlayerOneTotalLowerSection.textContent) > 0 && parseFloat(buttonPlayerOneTotalUpperSection.textContent) > 0) {
        grandTotalPlayerOne.textContent = parseFloat(buttonPlayerOneTotalLowerSection.textContent) + parseFloat(buttonPlayerOneTotalUpperSection.textContent);
    }

    } else if (!onTest) {
    buttonPlayerOneAces.removeEventListener("click", acesResult);
    buttonPlayerOneTwos.removeEventListener("click", twosResult);
    buttonPlayerOneThrees.removeEventListener("click", threesResult);
    buttonPlayerOneFours.removeEventListener("click", foursResult);
    buttonPlayerOneFives.removeEventListener("click", fivesResult);
    buttonPlayerOneSixes.removeEventListener("click", sixesResult);

    buttonPlayerOneThreeOfAKind.removeEventListener("click", threeOfAKindResult);
    buttonPlayerOneFourOfAKind.removeEventListener("click", fourOfAKindResult);
    buttonPlayerOneFullHouse.removeEventListener("click", fullHouseResult);
    buttonPlayerOneLowStraight.removeEventListener("click", lowStraightResult);
    buttonPlayerOneHighStraight.removeEventListener("click", highStraightResult);
    buttonPlayerOneYahtzee.removeEventListener("click", yahtzeeResult);
    buttonPlayerOneChance.removeEventListener("click", chanceResult);
    }
}

const mainButton = document.querySelector("button.main-button");
/* upper section score */
function acesResult() {
    if (playerOneScoreUpperSection.aces === -1 && playerOneInput[0].textContent !== "") {
        playerOneScoreUpperSection.aces = parseFloat(buttonPlayerOneAces.textContent);
        for (let i = 1; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneAces.textContent = `[ ${playerOneScoreUpperSection.aces} ]`;
        mainButton.classList.remove("turn-off-button");
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
        mainButton.classList.remove("turn-off-button");
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
        mainButton.classList.remove("turn-off-button");
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
        mainButton.classList.remove("turn-off-button");
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
        mainButton.classList.remove("turn-off-button");
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
        mainButton.classList.remove("turn-off-button");
    }
}
/* lower section score */
function threeOfAKindResult() {
    if (playerOneScoreLowerSection.threeOfAKind === -1 && playerOneInput[6].textContent !== "") {
        playerOneScoreLowerSection.threeOfAKind = parseFloat(buttonPlayerOneThreeOfAKind.textContent);
        for (let i = 6; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 5; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneThreeOfAKind.textContent = `[ ${playerOneScoreLowerSection.threeOfAKind} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function fourOfAKindResult() {
    if (playerOneScoreLowerSection.fourOfAKind === -1 && playerOneInput[7].textContent !== "") {
        playerOneScoreLowerSection.fourOfAKind = parseFloat(buttonPlayerOneFourOfAKind.textContent);
        for (let i = 7; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 6; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneFourOfAKind.textContent = `[ ${playerOneScoreLowerSection.fourOfAKind} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function fullHouseResult() {
    if (playerOneScoreLowerSection.fullHouse === -1 && playerOneInput[8].textContent !== "") {
        playerOneScoreLowerSection.fullHouse = parseFloat(buttonPlayerOneFullHouse.textContent);
        for (let i = 8; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 7; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneFullHouse.textContent = `[ ${playerOneScoreLowerSection.fullHouse} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function lowStraightResult() {
    if (playerOneScoreLowerSection.lowStraight === -1 && playerOneInput[9].textContent !== "") {
        playerOneScoreLowerSection.lowStraight = parseFloat(buttonPlayerOneLowStraight.textContent);
        for (let i = 9; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 8; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneLowStraight.textContent = `[ ${playerOneScoreLowerSection.lowStraight} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function highStraightResult() {
    if (playerOneScoreLowerSection.highStraight === -1 && playerOneInput[10].textContent !== "") {
        playerOneScoreLowerSection.highStraight = parseFloat(buttonPlayerOneHighStraight.textContent);
        for (let i = 10; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 9; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneHighStraight.textContent = `[ ${playerOneScoreLowerSection.highStraight} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function yahtzeeResult() {
    if (playerOneScoreLowerSection.yahtzee === -1 && playerOneInput[11].textContent !== "") {
        playerOneScoreLowerSection.yahtzee = parseFloat(buttonPlayerOneYahtzee.textContent);
        for (let i = 11; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 10; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneYahtzee.textContent = `[ ${playerOneScoreLowerSection.yahtzee} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function chanceResult() {
    if (playerOneScoreLowerSection.chance === -1 && playerOneInput[12].textContent !== "") {
        playerOneScoreLowerSection.chance = parseFloat(buttonPlayerOneChance.textContent);
        for (let i = 12; i < playerOneInput.length; i++) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        for (let i = 11; i >= 0; i--) {
            if (playerOneInput[i].textContent.endsWith("]") === false) {
            playerOneInput[i].textContent = "";
            }
        }
        buttonPlayerOneChance.textContent = `[ ${playerOneScoreLowerSection.chance} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}

export {
    selectResult,
};
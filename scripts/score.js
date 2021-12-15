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

const playerTwoInput = document.querySelectorAll(".player-two-input");

const buttonPlayerTwoAces = document.querySelector("#aces-player-two-input");
const buttonPlayerTwoTwos = document.querySelector("#twos-player-two-input");
const buttonPlayerTwoThrees = document.querySelector("#threes-player-two-input");
const buttonPlayerTwoFours = document.querySelector("#fours-player-two-input");
const buttonPlayerTwoFives = document.querySelector("#fives-player-two-input");
const buttonPlayerTwoSixes = document.querySelector("#sixes-player-two-input");

const buttonPlayerTwoThreeOfAKind = document.querySelector("#three-of-a-Kind-player-two-input");
const buttonPlayerTwoFourOfAKind = document.querySelector("#four-of-a-Kind-player-two-input");
const buttonPlayerTwoFullHouse = document.querySelector("#full-house-player-two-input");
const buttonPlayerTwoLowStraight = document.querySelector("#low-straight-player-two-input");
const buttonPlayerTwoHighStraight = document.querySelector("#high-straight-player-two-input");
const buttonPlayerTwoYahtzee = document.querySelector("#yahtzee-player-two-input");
const buttonPlayerTwoChance = document.querySelector("#chance-player-two-input");

let stopSelectPlayerOne = false;
let stopSelectPlayerTwo = false;
function selectResult(onTest, playerOne, playerTwo, resetButton) {
    if (resetButton === false) {
        stopSelectPlayerOne = false;
        stopSelectPlayerTwo = false;
    }
    if (playerOne) {
        /* scoring tests upper section player one */
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
            const sumHigherSection = upperSectionScoreArray.reduce(function (a, b) { return a + b });
            buttonPlayerOneTotal.textContent = sumHigherSection;
            if (sumHigherSection >= 63) {
                buttonPlayerOneBonus.textContent = 35;
                buttonPlayerOneTotalUpperSection.textContent = sumHigherSection + 35;
            } else {
                buttonPlayerOneBonus.textContent = 0;
                buttonPlayerOneTotalUpperSection.textContent = sumHigherSection;
            }

        }
        /* scoring tests lower section player one */
        let lowerSectionScoreArray = [];
        let valuesLowerSection = Object.values(playerOneScoreLowerSection);
        for (let i = 0; i < valuesLowerSection.length; i++) {
            if (valuesLowerSection[i] !== -1) {
                lowerSectionScoreArray.push(valuesLowerSection[i]);
            }
        }
        const buttonPlayerOneTotalLowerSection = document.querySelector("#total-of-lower-section-player-one-input");
        if (lowerSectionScoreArray.length === 7) {
            const sumlowerSection = lowerSectionScoreArray.reduce(function (a, b) { return a + b });
            buttonPlayerOneTotalLowerSection.textContent = sumlowerSection;
        }
        /* grand score test player one */
        const grandTotalPlayerOne = document.querySelector("#grand-total-player-one-input");
        if (parseFloat(buttonPlayerOneTotalLowerSection.textContent) > 0 && parseFloat(buttonPlayerOneTotalUpperSection.textContent) > 0) {
            grandTotalPlayerOne.textContent = parseFloat(buttonPlayerOneTotalLowerSection.textContent) + parseFloat(buttonPlayerOneTotalUpperSection.textContent);

            /* reset score */
            playerOneScoreUpperSection.aces = -1;
            playerOneScoreUpperSection.twos = -1;
            playerOneScoreUpperSection.threes = -1;
            playerOneScoreUpperSection.fours = -1;
            playerOneScoreUpperSection.fives = -1;
            playerOneScoreUpperSection.sixes = -1;

            playerOneScoreLowerSection.threeOfAKind = -1;
            playerOneScoreLowerSection.fourOfAKind = -1;
            playerOneScoreLowerSection.fullHouse = -1;
            playerOneScoreLowerSection.lowStraight = -1;
            playerOneScoreLowerSection.highStraight = -1;
            playerOneScoreLowerSection.yahtzee = -1;
            playerOneScoreLowerSection.chance = -1;

            /* score select stop */
            if (resetButton !== false) {
                stopSelectPlayerOne = true;
            }
        }
    } else if (playerTwo) {
        /* scoring tests upper section player two */
        let upperSectionScoreArray = [];
        let valuesUpperSection = Object.values(playerTwoScoreUpperSection);
        for (let i = 0; i < valuesUpperSection.length; i++) {
            if (valuesUpperSection[i] !== -1) {
                upperSectionScoreArray.push(valuesUpperSection[i]);
            }
        }
        const buttonPlayerTwoTotalUpperSection = document.querySelector("#total-of-upper-section-player-two-input");
        const buttonPlayerTwoTotal = document.querySelector("#total-player-two-input");
        const buttonPlayerTwoBonus = document.querySelector("#bonus-player-two-input");
        if (upperSectionScoreArray.length === 6) {
            const sumHigherSection = upperSectionScoreArray.reduce(function (a, b) { return a + b });
            buttonPlayerTwoTotal.textContent = sumHigherSection;
            if (sumHigherSection >= 63) {
                buttonPlayerTwoBonus.textContent = 35;
                buttonPlayerTwoTotalUpperSection.textContent = sumHigherSection + 35;
            } else {
                buttonPlayerTwoBonus.textContent = 0;
                buttonPlayerTwoTotalUpperSection.textContent = sumHigherSection;
            }

        }
        /* scoring tests lower section player two */
        let lowerSectionScoreArray = [];
        let valuesLowerSection = Object.values(playerTwoScoreLowerSection);
        for (let i = 0; i < valuesLowerSection.length; i++) {
            if (valuesLowerSection[i] !== -1) {
                lowerSectionScoreArray.push(valuesLowerSection[i]);
            }
        }
        const buttonPlayerTwoTotalLowerSection = document.querySelector("#total-of-lower-section-player-two-input");
        if (lowerSectionScoreArray.length === 7) {
            const sumlowerSection = lowerSectionScoreArray.reduce(function (a, b) { return a + b });
            buttonPlayerTwoTotalLowerSection.textContent = sumlowerSection;
        }
        /* grand score test player two */
        const grandTotalPlayerTwo = document.querySelector("#grand-total-player-two-input");
        if (parseFloat(buttonPlayerTwoTotalLowerSection.textContent) > 0 && parseFloat(buttonPlayerTwoTotalUpperSection.textContent) > 0) {
            grandTotalPlayerTwo.textContent = parseFloat(buttonPlayerTwoTotalLowerSection.textContent) + parseFloat(buttonPlayerTwoTotalUpperSection.textContent);

            /* reset score */
            playerTwoScoreUpperSection.aces = -1;
            playerTwoScoreUpperSection.twos = -1;
            playerTwoScoreUpperSection.threes = -1;
            playerTwoScoreUpperSection.fours = -1;
            playerTwoScoreUpperSection.fives = -1;
            playerTwoScoreUpperSection.sixes = -1;

            playerTwoScoreLowerSection.threeOfAKind = -1;
            playerTwoScoreLowerSection.fourOfAKind = -1;
            playerTwoScoreLowerSection.fullHouse = -1;
            playerTwoScoreLowerSection.lowStraight = -1;
            playerTwoScoreLowerSection.highStraight = -1;
            playerTwoScoreLowerSection.yahtzee = -1;
            playerTwoScoreLowerSection.chance = -1;

            /* score select stop */
            if (resetButton !== false) {
                stopSelectPlayerTwo = true;
            }
        }
    }
    /* player one */
    if (onTest) {
        buttonPlayerOneAces.addEventListener("click", acesResultPlayerOne);
        buttonPlayerOneTwos.addEventListener("click", twosResultPlayerOne);
        buttonPlayerOneThrees.addEventListener("click", threesResultPlayerOne);
        buttonPlayerOneFours.addEventListener("click", foursResultPlayerOne);
        buttonPlayerOneFives.addEventListener("click", fivesResultPlayerOne);
        buttonPlayerOneSixes.addEventListener("click", sixesResultPlayerOne);

        buttonPlayerOneThreeOfAKind.addEventListener("click", threeOfAKindResultPlayerOne);
        buttonPlayerOneFourOfAKind.addEventListener("click", fourOfAKindResultPlayerOne);
        buttonPlayerOneFullHouse.addEventListener("click", fullHouseResultPlayerOne);
        buttonPlayerOneLowStraight.addEventListener("click", lowStraightResultPlayerOne);
        buttonPlayerOneHighStraight.addEventListener("click", highStraightResultPlayerOne);
        buttonPlayerOneYahtzee.addEventListener("click", yahtzeeResultPlayerOne);
        buttonPlayerOneChance.addEventListener("click", chanceResultPlayerOne);
    }
    if (onTest === false || stopSelectPlayerOne) {
        buttonPlayerOneAces.removeEventListener("click", acesResultPlayerOne);
        buttonPlayerOneTwos.removeEventListener("click", twosResultPlayerOne);
        buttonPlayerOneThrees.removeEventListener("click", threesResultPlayerOne);
        buttonPlayerOneFours.removeEventListener("click", foursResultPlayerOne);
        buttonPlayerOneFives.removeEventListener("click", fivesResultPlayerOne);
        buttonPlayerOneSixes.removeEventListener("click", sixesResultPlayerOne);

        buttonPlayerOneThreeOfAKind.removeEventListener("click", threeOfAKindResultPlayerOne);
        buttonPlayerOneFourOfAKind.removeEventListener("click", fourOfAKindResultPlayerOne);
        buttonPlayerOneFullHouse.removeEventListener("click", fullHouseResultPlayerOne);
        buttonPlayerOneLowStraight.removeEventListener("click", lowStraightResultPlayerOne);
        buttonPlayerOneHighStraight.removeEventListener("click", highStraightResultPlayerOne);
        buttonPlayerOneYahtzee.removeEventListener("click", yahtzeeResultPlayerOne);
        buttonPlayerOneChance.removeEventListener("click", chanceResultPlayerOne);
    }
    /* player two */
    if (onTest) {
        buttonPlayerTwoAces.addEventListener("click", acesResult);
        buttonPlayerTwoTwos.addEventListener("click", twosResult);
        buttonPlayerTwoThrees.addEventListener("click", threesResult);
        buttonPlayerTwoFours.addEventListener("click", foursResult);
        buttonPlayerTwoFives.addEventListener("click", fivesResult);
        buttonPlayerTwoSixes.addEventListener("click", sixesResult);

        buttonPlayerTwoThreeOfAKind.addEventListener("click", threeOfAKindResult);
        buttonPlayerTwoFourOfAKind.addEventListener("click", fourOfAKindResult);
        buttonPlayerTwoFullHouse.addEventListener("click", fullHouseResult);
        buttonPlayerTwoLowStraight.addEventListener("click", lowStraightResult);
        buttonPlayerTwoHighStraight.addEventListener("click", highStraightResult);
        buttonPlayerTwoYahtzee.addEventListener("click", yahtzeeResult);
        buttonPlayerTwoChance.addEventListener("click", chanceResult);
    }
    if (onTest === false || stopSelectPlayerTwo) {
        buttonPlayerTwoAces.removeEventListener("click", acesResult);
        buttonPlayerTwoTwos.removeEventListener("click", twosResult);
        buttonPlayerTwoThrees.removeEventListener("click", threesResult);
        buttonPlayerTwoFours.removeEventListener("click", foursResult);
        buttonPlayerTwoFives.removeEventListener("click", fivesResult);
        buttonPlayerTwoSixes.removeEventListener("click", sixesResult);

        buttonPlayerTwoThreeOfAKind.removeEventListener("click", threeOfAKindResult);
        buttonPlayerTwoFourOfAKind.removeEventListener("click", fourOfAKindResult);
        buttonPlayerTwoFullHouse.removeEventListener("click", fullHouseResult);
        buttonPlayerTwoLowStraight.removeEventListener("click", lowStraightResult);
        buttonPlayerTwoHighStraight.removeEventListener("click", highStraightResult);
        buttonPlayerTwoYahtzee.removeEventListener("click", yahtzeeResult);
        buttonPlayerTwoChance.removeEventListener("click", chanceResult);
    }

}
const mainButton = document.querySelector("button.main-button");
/* upper section score player one */
function acesResultPlayerOne() {
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
function twosResultPlayerOne() {
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
function threesResultPlayerOne() {
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
function foursResultPlayerOne() {
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
function fivesResultPlayerOne() {
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
function sixesResultPlayerOne() {
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
/* lower section score player one */
function threeOfAKindResultPlayerOne() {
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
function fourOfAKindResultPlayerOne() {
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
function fullHouseResultPlayerOne() {
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
function lowStraightResultPlayerOne() {
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
function highStraightResultPlayerOne() {
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
function yahtzeeResultPlayerOne() {
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
function chanceResultPlayerOne() {
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
/* upper section score player two */
function acesResult() {
    if (playerTwoScoreUpperSection.aces === -1 && playerTwoInput[0].textContent !== "") {
        playerTwoScoreUpperSection.aces = parseFloat(buttonPlayerTwoAces.textContent);
        for (let i = 1; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoAces.textContent = `[ ${playerTwoScoreUpperSection.aces} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function twosResult() {
    if (playerTwoScoreUpperSection.twos === -1 && playerTwoInput[1].textContent !== "") {
        playerTwoScoreUpperSection.twos = parseFloat(buttonPlayerTwoTwos.textContent);
        for (let i = 1; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        if (playerTwoInput[0].textContent.endsWith("]") === false) {
            playerTwoInput[0].textContent = "";
        }
        grandResults();
        buttonPlayerTwoTwos.textContent = `[ ${playerTwoScoreUpperSection.twos} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function threesResult() {
    if (playerTwoScoreUpperSection.threes === -1 && playerTwoInput[2].textContent !== "") {
        playerTwoScoreUpperSection.threes = parseFloat(buttonPlayerTwoThrees.textContent);
        for (let i = 2; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 1; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoThrees.textContent = `[ ${playerTwoScoreUpperSection.threes} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function foursResult() {
    if (playerTwoScoreUpperSection.fours === -1 && playerTwoInput[3].textContent !== "") {
        playerTwoScoreUpperSection.fours = parseFloat(buttonPlayerTwoFours.textContent);
        for (let i = 3; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 2; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoFours.textContent = `[ ${playerTwoScoreUpperSection.fours} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function fivesResult() {
    if (playerTwoScoreUpperSection.fives === -1 && playerTwoInput[4].textContent !== "") {
        playerTwoScoreUpperSection.fives = parseFloat(buttonPlayerTwoFives.textContent);
        for (let i = 4; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 3; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoFives.textContent = `[ ${playerTwoScoreUpperSection.fives} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function sixesResult() {
    if (playerTwoScoreUpperSection.sixes === -1 && playerTwoInput[5].textContent !== "") {
        playerTwoScoreUpperSection.sixes = parseFloat(buttonPlayerTwoSixes.textContent);
        for (let i = 5; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 4; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoSixes.textContent = `[ ${playerTwoScoreUpperSection.sixes} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
/* lower section score player two*/
function threeOfAKindResult() {
    if (playerTwoScoreLowerSection.threeOfAKind === -1 && playerTwoInput[6].textContent !== "") {
        playerTwoScoreLowerSection.threeOfAKind = parseFloat(buttonPlayerTwoThreeOfAKind.textContent);
        for (let i = 6; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 5; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoThreeOfAKind.textContent = `[ ${playerTwoScoreLowerSection.threeOfAKind} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function fourOfAKindResult() {
    if (playerTwoScoreLowerSection.fourOfAKind === -1 && playerTwoInput[7].textContent !== "") {
        playerTwoScoreLowerSection.fourOfAKind = parseFloat(buttonPlayerTwoFourOfAKind.textContent);
        for (let i = 7; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 6; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoFourOfAKind.textContent = `[ ${playerTwoScoreLowerSection.fourOfAKind} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function fullHouseResult() {
    if (playerTwoScoreLowerSection.fullHouse === -1 && playerTwoInput[8].textContent !== "") {
        playerTwoScoreLowerSection.fullHouse = parseFloat(buttonPlayerTwoFullHouse.textContent);
        for (let i = 8; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 7; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoFullHouse.textContent = `[ ${playerTwoScoreLowerSection.fullHouse} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function lowStraightResult() {
    if (playerTwoScoreLowerSection.lowStraight === -1 && playerTwoInput[9].textContent !== "") {
        playerTwoScoreLowerSection.lowStraight = parseFloat(buttonPlayerTwoLowStraight.textContent);
        for (let i = 9; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 8; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoLowStraight.textContent = `[ ${playerTwoScoreLowerSection.lowStraight} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function highStraightResult() {
    if (playerTwoScoreLowerSection.highStraight === -1 && playerTwoInput[10].textContent !== "") {
        playerTwoScoreLowerSection.highStraight = parseFloat(buttonPlayerTwoHighStraight.textContent);
        for (let i = 10; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 9; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoHighStraight.textContent = `[ ${playerTwoScoreLowerSection.highStraight} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function yahtzeeResult() {
    if (playerTwoScoreLowerSection.yahtzee === -1 && playerTwoInput[11].textContent !== "") {
        playerTwoScoreLowerSection.yahtzee = parseFloat(buttonPlayerTwoYahtzee.textContent);
        for (let i = 11; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 10; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoYahtzee.textContent = `[ ${playerTwoScoreLowerSection.yahtzee} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function chanceResult() {
    if (playerTwoScoreLowerSection.chance === -1 && playerTwoInput[12].textContent !== "") {
        playerTwoScoreLowerSection.chance = parseFloat(buttonPlayerTwoChance.textContent);
        for (let i = 12; i < playerTwoInput.length; i++) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        for (let i = 11; i >= 0; i--) {
            if (playerTwoInput[i].textContent.endsWith("]") === false) {
                playerTwoInput[i].textContent = "";
            }
        }
        grandResults();
        buttonPlayerTwoChance.textContent = `[ ${playerTwoScoreLowerSection.chance} ]`;
        mainButton.classList.remove("turn-off-button");
    }
}
function grandResults() {
    let getResults = [];
    for (let i = 0; i < playerTwoInput.length; i++) {
        if (playerTwoInput[i].textContent.endsWith("]") === true) {
            getResults.push(playerTwoInput[i].textContent);
            if (getResults.length === 12) {
                mainButton.textContent = "Get Results";
            }
        }
    }
}

export {
    selectResult,
};
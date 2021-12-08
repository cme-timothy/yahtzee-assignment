import {
    lowerSection,
} from "./data.js";
import {
    fiveDiceArray,
    diceSummation,
} from "./index.js";

function lowerSectionTest() {
    const dicePairArray = [];
    let fullHouseThreeOfAKindTest = false;
    let fullHouseTwoOfAKindTest = false;
    let StraightTest= 0;
    for (let i = 1; i <= 6; i++) {
        diceTwoOrMoreOfAKind(i);
    }

    function diceTwoOrMoreOfAKind(number) {
    let diceSameNumber = fiveDiceArray.filter(element => element === number);
        if (diceSameNumber.length === 3) {
            lowerSection.pair = diceSummation;
            dicePairArray.push(diceSameNumber);
            lowerSection.threeOfAKind = diceSummation;
            fullHouseThreeOfAKindTest = true;

        } else if (diceSameNumber.length === 4) {
            lowerSection.pair = diceSummation;
            lowerSection.twoPairs = diceSummation;
            lowerSection.threeOfAKind = diceSummation;
            lowerSection.fourOfAKind = diceSummation;

        } else if (diceSameNumber.length === 5) {
            lowerSection.pair = diceSummation;
            lowerSection.twoPairs = diceSummation;
            lowerSection.threeOfAKind = diceSummation;
            lowerSection.fourOfAKind = diceSummation;
            lowerSection.yahtzee = diceSummation;

        } else if (diceSameNumber.length === 2) {
            lowerSection.pair = diceSummation;
            dicePairArray.push(diceSameNumber);
            fullHouseTwoOfAKindTest = true;

        } else {
            StraightTest++;
        }
    }

    if (dicePairArray.length === 2) {
        lowerSection.twoPairs = diceSummation;
    }
    if (fullHouseThreeOfAKindTest && fullHouseTwoOfAKindTest) {
        lowerSection.fullHouse = diceSummation;
    }

    if (StraightTest === 5) {
        const lowStraightTestOne = fiveDiceArray.find(element => element >= 5);
        const lowStraightTestTwo = fiveDiceArray.find(element => element === 6 || element === 1);
        const lowStraightTestThree = fiveDiceArray.find(element => element <= 2);
            if(lowStraightTestOne !== 5 && lowStraightTestOne !== 6) {
            lowerSection.lowStraight = diceSummation;
            } else if (lowStraightTestTwo !== 6 && lowStraightTestTwo !== 1) {
            lowerSection.lowStraight = diceSummation;
            } else if (lowStraightTestThree !== 2 && lowStraightTestThree !== 1) {
            lowerSection.lowStraight = diceSummation;
            }
    } else if (StraightTest === 6) {
        lowerSection.lowStraight = diceSummation;
        lowerSection.highStraight = diceSummation;
    }
    return lowerSection;
}
console.log(lowerSectionTest());

export default lowerSection;

function getRandomDiceValue(){
    return 1 + Math.floor(6*Math.random());
}

function getRollData(numberOfDice){
    const values = [];
    let total = 0;
    for(let i = 0; i < numberOfDice; i++){
        let diceValue = getRandomDiceValue()
        values.push(diceValue);
        total += diceValue;
    }
    return {
        numberOfDice: numberOfDice,
        values: values,
        total: total
    };
}

function diceImageTag(diceValue){
    return `<img src="images/dice/side_${diceValue}.png" alt="side ${diceValue}">`
}

const diceRowElement = document.getElementById("dice_row");
const totalNumberElement = document.querySelector(".total_number");
const selectElement = document.querySelector("select");

function onRollDice(){
    const rollData = getRollData(parseInt(selectElement.value));
    let diceTags = "";
    for(let diceValue of rollData.values){
        diceTags += diceImageTag(diceValue);
    }
    diceRowElement.innerHTML = diceTags;
    totalNumberElement.innerHTML = rollData.total.toString();
}

function onReset(){
    diceRowElement.innerHTML = "";
    totalNumberElement.innerHTML = "0"
    selectElement.selectedIndex = 2;
    // return false to prevent default link behavior
    return false;
}


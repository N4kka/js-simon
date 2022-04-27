//Display 5 random numbers on the page, then it starts a 30 sec timer, after then the user has to rewrite the numbers displayed and the output must say how many and which numbers he got

// - Generate 5 random numbers 
const displayedNumbers = document.getElementById("numbers");
const numbers = generateNumbers();

function generateNumbers () {
    const numbersArray = [];
    while (numbersArray.length < 5) {
        const randomNumber = getRndInteger(1, 99);
        if ( !numbersArray.includes(randomNumber) ) {
            numbersArray.push(randomNumber);
        }
    }
    return numbersArray;
}

//Display the numbers and hide them after 30 seconds
displayedNumbers.innerHTML = numbers;
console.log(displayedNumbers);

setTimeout(myTimer, 3000);

function myTimer () {
    document.getElementById("numbers").innerHTML = "";
}

//Ask the user the five numbers 
const askUserNumber = setTimeout(function() {
    let userNumbers = userNumberChoose();
    checkedNumbers(numbers, userNumbers);
}, 3500)
console.log(askUserNumber,typeof(askUserNumber));

function userNumberChoose() {
    let userNumbers = [];
    for (i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt("Quali erano i numeri?"));
        userNumbers.push(userNumber);
    }

    return userNumbers;
}

// **
//  * Description: The result will be displayed with this function
//  * @param {any} safeNumbersQuantity --> max number
//  * @param {any} winLose --> The result
//  * @returns {any}
function checkedNumbers (displayedNumbers, askUserNumber) {
    console.log(displayedNumbers);
    const resultTitle = document.getElementById("result");
    let resultMessage;

    let guessed = [];
    for (let i = 0; i < displayedNumbers.length; i++) {
        let currentNum = displayedNumbers[i];
        if (askUserNumber.includes(currentNum)) {
            guessed.push(currentNum);
        }
    }
    if (guessed.length) {
        resultMessage = `Hai vinto! Hai totalizzato un punteggio di ${guessed.length}, i numeri che hai indovinato sono ${guessed}`;
    } else {
        resultMessage = `Hai perso, hai totalizzato un punteggio di 0, i numeri erano sono ${displayedNumbers}!`
    }
    resultTitle.innerHTML = resultMessage;
}

//Utilities function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
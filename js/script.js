//Display 5 random numbers on the page, then it starts a 30 sec timer, after then the user has to rewrite the numbers displayed and the output must say how many and which numbers he got

// - Generate 5 random numbers 
const displayedNumbers = document.getElementById("numbers");


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
displayedNumbers.innerHTML = generateNumbers();

const timer = setTimeout(myTimer, 3000);

function myTimer () {
    document.getElementById("numbers").innerHTML = "";
}

//Ask the user the five numbers 
const askUserNumber = setTimeout(firstNumber, 3500)
const askUserNumber2 = setTimeout(secondNumber, 3500)
const askUserNumber3 = setTimeout(thirdNumber, 3500)
const askUserNumber4 = setTimeout(fourthNumber, 3500)
const askUserNumber5 = setTimeout(fifthNumber, 3500)

function firstNumber () {
    prompt("Quale era il primo numero?");
}

function secondNumber () {
    prompt("Quale era il secondo numero?");
}

function thirdNumber () {
    prompt("Quale era il terzo numero?");
}

function fourthNumber () {
    prompt("Quale era il quarto numero?");
}

function fifthNumber () {
    prompt("Quale era il quinto numero?");
}

//Utilities function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
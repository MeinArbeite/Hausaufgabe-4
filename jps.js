function printDelimiter(){
    console.log("-".repeat(20));
}

function checkHomeWork(studentName, studentCode, hmNumber){
    printDelimiter()
    console.log("Download zip-archive",studentName);
    console.log("Open VS code", studentCode);
    console.log("Find js file");
    console.log("Checking", hmNumber, "HW....");
    console.log("Write comments in chat with", studentName);
    console.log("Write grade in google sheet");
    printDelimiter();
}

checkHomeWork("Aziret", 640227, 3 );
checkHomeWork("Aktan", 431934, 2);
checkHomeWork("Vadim", 930148, 1);

 
function sum(a, b, c) {
    return a+b+c;
}

console.log(sum(7,5,6));

function finalizeDay(){
    finalizeCashierModule();
    finalizeCashierModule();
    console.log("Check Cashier module");
    console.log("Check Card module");
    console.log("Check Cashier module");
    console.log("Check Cashier module");
}

function finalizeCashierModule(){
    console.log("Check Cashier module");
    finalizeCashierBags()
}

function finalizeConvertations(){
    console.log("finalizeCashierBags");
} 

function finalizeCardsOperations(){
    console.log("finalizeCashierBags");
} 
function finalizeCardModule(){
    console.group("finalizeCashierBags");
    finalizeCashierBags();
    finalizeConvertations();
    console.groupEnd();
} 

// function finalizeCashierBags(){
    
//     console.log("finalizeCashierBags");
// }

// function finalizeConvertations(){
//     console.log("finalizeConvertation");
// } 

// function finalizeCardsOperations(){
//     console.log("finalizeCashierBags");
// } 
finalizeDay()

var validateByLuhn = function() {
    var isSecond = false;
var cardPanSum = 0;
console.log(cardPan);
for (var i = cardPan.length - 1; i >=0; i--) {
    var cardDigit = Number(cardPan[i]);
    var doubledDigit;
    if (isSecond) {
        doubledDigit = cardDigit * 2; //2 -> 02 -> 0 + 2; 16 -> 1 + 6
        var doubledDigitAsString = doubledDigit.toString().padStart(2,"0")
        var secondSum = 
          Number(doubledDigitAsString[0]) + Number(doubledDigitAsString[1])
        cardPanSum += secondSum;
        console.log(cardDigit, doubledDigit, doubledDigitAsString, secondSum);

    }else{
        cardPanSum += cardDigit;
        console.log(cardDigit);
    }
    isSecond = !isSecond;
}
console.log("Card PAN result:", cardPanSum % 10 === 0 ? "OK" : "ERROR");


}



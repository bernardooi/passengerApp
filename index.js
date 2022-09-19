//document.getElementById("counter").innerText=5;
//ctrl+k+c to comment 
// let firstBatch = 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch;

// console.log(count);



//let myAge = 19;

//console.log(myAge);



// let myAge = 19;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);



// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;

// console.log(bonusPoints);


//initialize count as 0

//listen for clicks

//increment count when clicked

// change count 
let saveEl = document.getElementById("save-el");
let counter = document.getElementById("counter");
let count = 0;

function increment(){

    count += 1;
    console.log(count);
    counter.textContent= count;
}

function save(){
    let dashes = count + " - ";
    saveEl.textContent += dashes;
    console.log(count);
    count = 0;
    counter.textContent = 0;
}

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// let name = "bernard";
// let greeting = "Hi, my name is";


// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let myGreeting = greeting + name;
// console.log(myGreeting);

// string always wins

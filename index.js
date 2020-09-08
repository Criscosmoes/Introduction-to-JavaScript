/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge = 22; 

//console.log(`1.   ${votingAge > 18}`); 




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let a = 2; 

let b = 1; 

a = b; 





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


let str = "1999"; 

let num = parseInt(str); 

//console.log(num); 


//Task d: Write a function to multiply a*b 

const multiply = (a,b) => {
    return `D.    ${a} times ${b} is equal to ${a * b}`  
}

//console.log(multiply(4,2)); 


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


const dogYears = age => {

    return `2.    ${age} human years is equal to ${age * 7} dog years`; 
}

//console.log(dogYears(22)); 




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996


const dogFeeder = (weight, age) => {

    let food; 

    if(age >= 1){

        if(weight <= 5){
            food = (weight * 0.05);
        }
        else if(weight > 5 && weight <= 10){
            food = (weight * 0.04);
        }
        else if(weight > 10 && weight <= 15){
            food = (weight * 0.03); 
        }
        else if(weight > 15){
            food = (weight * 0.02); 
        }
    }
    else if(age < 1){

        if(age > 0.35){
            food = (weight * 0.1);
        }
        else if(age > 0.35 && age < 0.58){
            food = (weight * 0.05); 
        }
        else if(age > 0.58){
            food = (weight * 0.04); 
        }
    }

    console.log(`dog should eat ${food} pounds of raw food per day`);
}

//dogFeeder(15,1); 
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

/* const game = str => {

    let choice, randomNum, computerChoice; 

    choice = ["rock", "paper", "scissors"];
    randomNum = Math.floor(Math.random() * 3)
    computerChoice = choice[randomNum]; 


    console.log(`You have chosen ${str}`); 

    if(str === "rock" && computerChoice === "paper"){
        console.log(`Computer chose ${computerChoice}. You lost.`)
    }
    else if(str === "rock" && computerChoice === "scissors"){
        console.log(`Computer chose ${computerChoice}. You won.`)
    }
    else if(str === "paper" && computerChoice === "rock"){
        console.log(`Computer chose ${computerChoice}. You won.`)
    }
    else if(str === "paper" && computerChoice === "scissors"){
        console.log(`Computer chose ${computerChoice}. You lost.`)
    }
    else if(str === "scissors" && computerChoice === "rock"){
        console.log(`Computer chose ${computerChoice}. You lost.`)
    }
    else if(str === "scissors" && computerChoice === "paper"){
        console.log(`Computer chose ${computerChoice}. You won.`)
    }
    else if(str === computerChoice){
        console.log('refresh page. Both chose the same thing'); 
    }
   
} */

  //game("scissors"); 
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kmToMiles = km => {

    let miles = km/1.609344;

    return `5a.   ${km} km is equal to ${miles.toFixed(2)} miles`; 

}

//console.log(kmToMiles(10)); 





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feetToCM = feet => {

    let cm = (feet * 30.48); 

    return `5b.   ${feet} feet is equal to ${cm.toFixed(2)} CM` 
}

//console.log(feetToCM(10)); 



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

const annoyingSong = startingNum => {

    let onTheWall = 99; 


    for(let i = startingNum; i > 0; i--){

        console.log(onTheWall); 

    }


}


//annoyingSong(10);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

const grade = num => {

    if(num >= 90){
        return "A";
    }
    else if(num >= 80){
        return "B"; 
    }
    else if(num >= 70){
        return "C"; 
    }
    else if(num >= 60){
        return "D"; 
    }
    else {
        return "F"; 
    }


}
  

//console.log(`7.  ${grade(1)}`); 

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method







/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

/* let choice = prompt("Enter either 'rock', 'paper', 'scissors'"); 

const game = str => {

    let choice, randomNum, computerChoice; 

    choice = ["rock", "paper", "scissors"];
    randomNum = Math.floor(Math.random() * 3)
    computerChoice = choice[randomNum]; 


    console.log(`You have chosen ${str}`); 

    if(str === "rock" && computerChoice === "paper"){
        console.log(`Computer chose ${computerChoice}. You lost.`)
    }
    else if(str === "rock" && computerChoice === "scissors"){
        console.log(`Computer chose ${computerChoice}. You won.`)
    }
    else if(str === "paper" && computerChoice === "rock"){
        console.log(`Computer chose ${computerChoice}. You won.`)
    }
    else if(str === "paper" && computerChoice === "scissors"){
        console.log(`Computer chose ${computerChoice}. You lost.`)
    }
    else if(str === "scissors" && computerChoice === "rock"){
        console.log(`Computer chose ${computerChoice}. You lost.`)
    }
    else if(str === "scissors" && computerChoice === "paper"){
        console.log(`Computer chose ${computerChoice}. You won.`)
    }
    else if(str === computerChoice){
        console.log('refresh page. Both chose the same thing'); 
    }
   
}


game(choice);  */
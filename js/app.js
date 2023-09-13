
// DATA TYPES
// let js = 'amazing';
// if (js === 'amazing') alert('Terrence is liking Javascript');
// console.log(1 + 1 + 2 + 2 + 10);
// console.log (population > populationFinland);

// console.log (population > populationAverage);

// console.log (populationFinland - population);

// console.log (populationAverage - population);

// console.log (isIsland, population, country, language);


// console.log (typeof isIsland);
// console.log (typeof language);
// console.log (typeof population);
// console.log (typeof firstName);
// console.log (ageHotaro, ageMiyuka)

// population = population / 2;

// console.log (population)

// population = population + 1;

// console.log (population)

// console.log (firstName + ' is from ' + country + ' and he inherits the power of creation ')

// const hotaroNew = `I am ${firstName} from the land of ${country} and my inheritance is from the God of ${inheritance}, it is please to meet you!`;

// console.log (hotaroNew)

// console.log (`Hotaro has set up for his journey to where? well, before we jump into that let up get a glance of our Hero's past. . . .`)

// If , Else Statement

// if (ageHotaro >= legalAge) 
// {
//     console.log ('this agent can start his scrapper orientation')
// } 
// else {
//     const yearsLeft = legalAge - ageHotaro;
//     console.log ( `I Apologize but you have ${yearsLeft} more years before you can sign up for this orientation`);
// }

// let century;

// if (hotaroBirthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log (century);
// if(population > 33000000) {
//     console.log ("Erhoda's population is above average")
// } else {
//     console.log ("Erhoda's population is below average")
// }
// console.log (`${firstName} is from ${country} and he inherits the power of ${inheritance}.`) 

// if (population >= populationHigh) {
//     console.log (`You originally belong to a strong well supplied country, please follow protocol and register to a less populated country, please connect with a Relocation agent for more assistance.`)
// } else if(population >= populationAverage) {
//     console.log (`You may now enter, please register your role to this new eutopia`)
// } else if (population >= populationLow) {
//     console.log (`You currently belong to a to a short supplied country, please try again when balances have been made, Take advantage of this flaw by engaging with the country development program. Thank you.`)
// } else {
//     console.log (`Your country is currently under the disqualification bar, therefore it is protocol procedure for country with these countries to be disbanded and absorbed by country re-selection, please comply and see a Relocation Agent for more information`)
// }

// Convertion and Coercion

// Type Convertion
// - Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types. The source code can also explicitly require a conversion to take place.

// const birthYear = '2050';
// console.log (Number(birthYear) + 8);
// console.log (birthYear,Number(birthYear) + 8);

// const roomNumber = 218;
// console.log (String(roomNumber));
// console.log (roomNumber, String(roomNumber));

// Coercion
// - Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

// const show = ('9' - '5');
// console.log (show);

// const showTwo = ('19' - '13' + '17');
// console.log (showTwo);

// const showThree = ('19' - '13' + 17);
// console.log (showThree);


// To be continued
// const bountyBucks = 0;
// if (bountyBucks) {
//     console.log ("Please select the merchendise your would like to purchase");
// } else {
//     console.log ("Please come back once you have currencies for the cheapest item otherwise, window shopping is not permitted")
// }

// let height;
// if (height) {
//     console.log ("You inputed your height")
// } else {
//     console.log ("oh no! you did not fill the height section, get back and finish that");
// }
// const favoriteNumber = prompt ("what is your favorite number?");

// if (favoriteNumber == 30 ) {
//     console.log ("dang you old");
// } else if (favoriteNumber >= 20){
//     console.log ("dang you a stud!");
// } else if (favoriteNumber < 20){
//     console.log ("you a baby!");
// } else {
//     console.log ("you cant be serious!")
// }
// console.log (typeof favoriteNumber);

// let numNeighbours = 0;
// numNeighbours = 
// console.log (typeof numNeighbours);
// prompt ("how many neighbour country to we have?")
// if (numNeighbours === 1) {
//     console.log ( "You have only one neightbor country and they heavily depend on your country for plenty of resources")
// } else if (numNeighbours == 2) {
//     console.log ("We only have one neighbor, not unless there is an unknown village that is currently petitioning a country solidification approval")
// } else if (numNeighbours == 5) {
//     console.log ("Thats too much we need to absorb 1 or 2 of them to expand!")
// } else {
//     console.log ("We have 0 Neighbors, We must take action an expand!")
// }
// console.log (typeof numNeighbours);



// To be continued
// const bountyBucks = 0;
// if (bountyBucks) {
//     console.log ("Please select the merchendise your would like to purchase");
// } else {
//     console.log ("Please come back once you have currencies for the cheapest item otherwise, window shopping is not permitted")
// }

// Challenge 2 SUCCESSFUL
// const tjScore = ((60 + 60 + 60) / 3);
// const rosyScore = ((60 + 60 + 60) / 3);

// if (tjScore > rosyScore && tjScore >= 60) {
//     console.log ("TJ Won!");
// } else if (rosyScore > tjScore && rosyScore >= 60) {
//     console.log ("Rosy Won!")
// } else if (tjScore >= 60 && rosyScore >= 60){
//     console.log ("No one wins!")
// }

// let firstName = "Hotaro";
// let country = 'Erhoda';
// let continent = 'Area 5';
// let population = 8392;
// let isIsland = true;
// let language = "English";
// const inheritance = "Creation"
// const currentYear = "2058"
// const ageHotaro = currentYear - 2050;
// const ageMiyuka = currentYear - 301;
// const hotaroBirthYear = currentYear - ageHotaro;
// let populationDisqualified = 50000;
// let populationHigh = 500000;
// let populationAverage = 300000;
// let populationLow = 90000;
// const legalAge = 10;

// Switch Function
// const day = 'thursday';

// switch(day){
//     case 'monday': // means the same as - day === 'monday'
//         console.log ('Work at 6:30pm - 12:30am');
//         console.log ('Do Homework and try not to fall behind');
//         console.log ('Exercise a little bit, both coding and your actual body');
//         console.log ('Make sure to help Rosy as much as you can');
//     break;
//     case 'tuesday':
//         console.log ('Work at 6:30pm - 5:00am');
//         console.log ('Exercise a little bit, both coding and your actual body');
//         console.log ('Class at 2pm, Be on time');
//         console.log ('Stay ahead of your main challenger which is the present you!');
//     break;
//     case 'wednesday':
//         console.log ('Work at 6:30pm - 12:30am');
//         console.log ('Exercise a little bit, both coding and your actual body');
//         console.log ('Do JS practices');
//     break;
//     case 'thursday':
//         console.log ('Work at 6:30pm - 12:30am');
//         console.log ('Exercise a little bit, both coding and your actual body');
//         console.log ('Class at 2pm, Be on time');
//         console.log ('Stay ahead of your main challenger which is the present you!'); 
//     break;
//     case 'friday':
//         console.log ('No work, no school help Rosy as much as possible today!!')
//     break;
//     case 'saturday':
//         console.log ('Class at 10am, Be on time');
//     break;
//     case 'sunday':
//         console.log ('Work at 6:30pm - 12:30am');
//         console.log ('Exercise a little bit, both coding and your actual body');
//     break;
// } 


//  if else version
// if (day === 'monday') {
//     console.log ('Work at 6:30pm - 12:30am');
//     console.log ('Do Homework and try not to fall behind');
//     console.log ('Exercise a little bit, both coding and your actual body');
//     console.log ('Make sure to help Rosy as much as you can');
// } else if (day === 'tuesday' || day === 'thursday') {
//     console.log ('Work at 6:30pm - 5:00am');
//     console.log ('Exercise a little bit, both coding and your actual body');
//     console.log ('Class at 2pm, Be on time');
//     console.log ('Stay ahead of your main challenger which is the present you!');
// } else if (day === 'wednesday') {
//     console.log ('Work at 6:30pm - 12:30am');
//     console.log ('Exercise a little bit, both coding and your actual body');
//     console.log ('Do JS practices');
// } else if (day === 'friday') {
//     console.log ('No work, no school help Rosy as much as possible today!!')
// } else if (day === 'saturday') {
//     console.log ('Class at 10am, Be on time');
// } else {
//     console.log ('Work at 6:30pm - 12:30am');
//     console.log ('Exercise a little bit, both coding and your actual body');
//     console.log ('Start of the week let\'s give it our all');
// }

// Switch Statement Exercise 
// let language = 'mandarin';

// switch (language) {
//     case 'english':
//         console.log ('3rd place');
//     break;
//     case 'chinese':
//     case 'mandarin':
//         console.log ('MOST number of native speakers!');
//     break;
//     case 'spanish':
//         console.log ('2nd place in number of native speakers');
//     break;
//     case 'hindi':
//         console.log ('Number 4');
//     break;
//     case 'arabic':
//         console.log ('5th most spoken language');
//     break;
//     case 'other':
//         console.log ('Great Language Too!');
//     break;
// }

// Ternary Conditional Operator

// const grimGauge = 0.1;

// const grimMode = grimGauge;
// Dirty Way
// grimGauge >= 0.3 ? console.log ('You are now actively on combat mode') : console.log ('Please Hammer out if you\'d like to cause more damage');

// Normal if else statement
// if (grimGauge >= 0.3) {
//     console.log ('You are now actively on combat mode');
// } else {
//     console.log ('Please Hammer out if you\'d like to cause more damage')
// };

// Clean Way
// const grimStatus = grimGauge >= 0.3 ? ('Combat Mode Active') :  ('Combat Mode is not engaged'); console.log (grimStatus)

// if (grimGauge >= 0.3) {
//     console.log (grimStatus);
// } else {
//     console.log (grimStatus);
// }

// Using Ternary Conditional Operator on Temporal Literal
// let grimGauge = 0.5;

// console.log (`Combat Status: ${grimGauge >= 0.3 ? 'Engaged' :  'Neutral'}`)


// Challenge 4 
// const bill = 275;
// const tip = bill / 100 * 15;
// const tip2 = bill / 100 * 20;
// const total = bill + tip;
// const total2 = bill + tip2;

// console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill >= 50 ? total : total2 }.`)



// Function

// declaring

// function checker () {
//     console.log (`Checking this function.......... its fine`);
// }

// calling

// checker();

// checker();

// checker();


// function balanceGauge(greenGauge, whiteGauge) {
//     const syncrostat = `Green gauge currently at level ${greenGauge} and white gauge is currently at level ${whiteGauge}`;
//     return syncrostat;
// }

// const checker = balanceGauge(40, 50);
// console.log(checker);

// const checker2 = balanceGauge(60, 10);
// console.log(checker2);


// Exercise Function
// function describeCountry(person, country, population, capitalCity) {
//     return (`${country} has ${population} people and its capital city is ${capitalCity}`);
// }
// function describeCountry(personName, country, population, capitalCity) {
//     return (`Agent ${personName}, currently residing in ${country} which has ${population} people and its capital city is ${capitalCity}`);
// }
// const hotaroLocation = describeCountry('Hotaro', 'Ehroda', 18935, 'Shinso Capital');
// const miyumiLocation = describeCountry('Miyumi', 'Rebo', 146235, 'Dattun Capital');
// const johnarLocation = describeCountry('Johnar', 'Zhibanzo', 433235, 'Havocan Capital');
// const zakLocation = describeCountry('Zak', 'Koyouru Village', 13235, 'Koyouru Capital');

// console.log(`${hotaroLocation}`);
// console.log(`${miyumiLocation}`);
// console.log (`${johnarLocation}`);
// console.log (`${zakLocation}`);


// 2 Function types

// Function Declatation

// function describeCountry(personName, country, population, capitalCity) {
//     return (`Agent ${personName}, currently residing in ${country} which has ${population} people and its capital city is ${capitalCity}`);
// }
// const person1 = describeCountry('Hotaro', 'Ehroda', 18935, 'Shinso Capital');
// console.log (person1);

// Function Expression

// const describeCountry2 = function (personName, country, population, capitalCity) {
//     return (`Agent ${personName}, currently residing in ${country} which has ${population} people and its capital city is ${capitalCity}`);
// }

// const person2 = describeCountry2('Hotaro', 'Ehroda', 18935, 'Shinso Capital');


// console.log (person2);



// Arrow Function 

// function expression comparison
// const HP = 300;
// const HP2 = 38347;
// const calcNormalAttack = function (damage) {
//     return HP - damage;
// }
// Arrow Key Practice Example:

// Example one:

// const person1 = calcNormalAttack(30);

// const calcNormalAttack2 = damage => HP2 - damage;
// const person2 = calcNormalAttack2(30);

// console.log(person1, person2);

// Example Two: 

// const maxHP = (hit, remainingHP) => {
//     const damageTaken = 150000 - hit;
//     const afterDamage = 150000 - damageTaken;
//     return `You just took ${damageTaken} your is now down to ${afterDamage} health, Please restore your health back to ${remainingHP}`;
// }

// console.log (maxHP(12334, 150000))


// Functions calling other Functions

// const cutPieces = function (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const appleSlices = cutPieces(apples);
//     const orangeSlices = cutPieces(oranges);


//     const juice = `Juice has ${appleSlices} apples slices and ${orangeSlices} oranges slices.`;
//     return juice;
// }
// console.log(fruitProcessor(5, 30))


// Function Exercise

// const calcAverage = function (score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
//     }
//     // const scoreDolphins = calcAverage(44, 23, 71);
//     // const scoreKoalas = calcAverage(65 , 54, 49);
//     const scoreDolphins = calcAverage(44, 23, 71);
//     const scoreKoalas = calcAverage(23 , 34, 27);

// function checkWinner(avgDolphines, avgKoalas) {
//     if(avgDolphines > avgKoalas * 2) {
//         console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`)
//     } else if (avgKoalas > avgDolphines * 2) {
//         console.log (`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`)
//     } else {
//         console.log(`No team wins...`)
//     }
// }

// const winner1 = checkWinner(46, 60)

// second form

// Test 1 
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const scoreDolphins = calcAverage(60, 60, 60);
// const scoreKoalas = calcAverage(60, 60, 60);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Win`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas Win`);
//     } else {
//         console.log('No one wins!')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// Lecture Exercise 

// funtion declaration version

// function percentageOfWorld1(population) {
//     return((population / 7900000000) * 100).toFixed(2);
    // console.log(`This Country's population takes ${percentageCount}%  of the world's population`);
//}

// const chinaPopulation = percentageOfWorld1(1441000000);

// const germanyPopulation = percentageOfWorld1(903000000);

// const  ehrodaPopulation = percentageOfWorld1(1364325);

// console.log(`break`);

// // function expression version

// const percentageOfWorld2 = function (population) {
//     const percentageCount2 = ((population / 7900000000) * 100).toFixed(2);
//     console.log(`This Country's population takes ${percentageCount2}% of the world's population`);
// }

// const chinaPopulation2 = percentageOfWorld2(1441000000);

// const germanyPopulation2 = percentageOfWorld2(903000000);

// const  ehrodaPopulation2 = percentageOfWorld2(1364325);

// // function 'ARROW' version

// console.log(`break`);

// const percentageOfWorld3 = (population) => {
//     const percentageCount3 = ((population / 7900000000) * 100).toFixed(2)
// console.log(`This Country's population takes ${percentageCount3}% of the world's population`);
// }

// const chinaPopulation3 = percentageOfWorld3(1441000000);

// const germanyPopulation3 = percentageOfWorld3(903000000);

// const  ehrodaPopulation3 = percentageOfWorld3(1364325);



// function describePopulation(country , population) {
//     const countryPercentage = percentageOfWorld1(1441000000);
//     console.log(`${country} has ${population} million people, which is about ${countryPercentage}% of the world.`);
// }

// describePopulation('Ehroda', 1441000000);

// Javascript Arrays

// normal variables
// const friend1 = 'theseus';
// const friend2 = 'rosy';
// const friend3 = 'ivana';

// using array 

// const familyMembers = ['Theseus', 'Rosy', 'Ivana', 'Naveah'];
// // console.log(familyMembers[0]);

// const birthYear = [2014, 1997, 2017];
// // console.log(birthYear[0]);

// const favoriteFood = ['Fries', 'Chilli Peppers', 'Chicken Adobo', 'Broccoli Cheddar Soup'];
// // console.log(favoriteFood[0]);

// const favoriteActivity = ['Animating', 'Pooping', 'Watching Youtube', 'Being A Baby'];
// // console.log(favoriteActivity[0]);

// // console.log(`${familyMembers[0]} is an amazing part of our family, born on the year ${birthYear[0]}and loves ${favoriteFood[0]} and ${favoriteActivity[0]}.`);

// Array Length 

//console.log(familyMembers[familyMembers.length - 3]);
// console.log(familyMembers[familyMembers.length - 2]);

// Example 2

// Array With Function
// const kidGroupOne = ['Jacob', 'Sushi', 'Drake', 'Susan', 'Popeye'];

// const kidGroupOne_Hobbies = ['Gaming', 'Basketball', 'Dancing', 'Guitar', 'Soccer'];

// const choresRequired = ['Dishes', 'Fold Clothes', 'Replace Trash', 'Take-Out Trash', 'Dust/Wipe Down and Sweep/Vacuum', 'Empty The Dish Washer'];

// const kidGroupOne_Grades_Math = [89, 92, 99, 90, 76];

// const kidGroupOne_Grades_Science = [80, 87, 95, 92, 80];

// const kidGroupOne_Grades_PhyEd = [90, 85, 90, 79, 84];

// const kidGroupOne_Grades_ArtMusic = [90, 91, 89, 94, 79];

// const kidGroupOne_Grades_SocStudies = [94, 90, 83, 90, 84];

// const getPoints = function (kidGroupOne_Grades_Math) {
//     if(kidGroupOne_Grades_Math >= 95) {
//         console.log('You Earned 1000 points! Keep It Up')
//     }
// }

// const reward = getPoints(99)

// Chaging a Value in an array 

// const kidGroupOne = ['Jacob', 'Sushi', 'Drake', 'Susan', 'Popeye'];

// console.log(kidGroupOne)
// kidGroupOne[0] = 'Miles';
// kidGroupOne[1] = 'Munanio';
// kidGroupOne[2] = 'Andrew';
// kidGroupOne[3] = 'Ivana';
// kidGroupOne[4] = 'Theseus';

// console.log(kidGroupOne);

// Array Practices (point system)
// userCurrentPoints = 1000

// const calcPoints = function (points) {
//     return 1000 + points;
// }

// const userEarnedPoints = [100, 200, 400, 1000, 400]

// const jacob = calcPoints(userEarnedPoints[0]);
// const loala = calcPoints(userEarnedPoints[1]);
// const jack = calcPoints(userEarnedPoints[3]);
// const roland = calcPoints(userEarnedPoints[userEarnedPoints.length - 1]);

// console.log(jacob, loala, jack, roland);

// const scoreList = [calcPoints(userEarnedPoints[0]), calcPoints(userEarnedPoints[1]), calcPoints(userEarnedPoints[2]),calcPoints(userEarnedPoints[3]), userEarnedPoints]

// console.log(scoreList)

// Array Practices (user system)

// const hobbies = ['Animating', 'Drawing', 'Soccer', 'Basketball', 'Coding'];
// const choreList = ['Dishes', 'Fold Clothes', 'Replace Trash', 'Take-Out Trash', 'Dust/Wipe Down and Sweep/Vacuum', 'Empty The Dish Washer'];
// const gradeList = [94, 90, 83, 90, 84];
// const specialAchievementList = ['Leadership Badge', 'Helpfulness Badge', 'Respectful Badge', 'Academic Badge', 'Hall Master', 'Chore Master', 'Master Of Subjects'];
// const friends = ['jacob', 'sina', 'lorel', 'john', 'troy'];
// const student_info = ['4th Grade','717 Louisedale Dr. 46808', 'July 2 , 2014', 'Type 1 Diabetic'];

// const theseus = [student_info[0],  hobbies[0], choreList[0,2,3,4], gradeList[0], specialAchievementList[0], friends[0,1]];

// console.log(theseus);
const kidName = ['Theseus', 'Ivana', 'Nevaeh'];
const kidcurrentPoints = [190823, 1283, 543]
const gradeMath = 90;
const gradeSocStud = 90;
const gradePhyEd = 88;
const gradeEnglish = 82;
const extraPoints = 82;
const chorePoints = 90;
const gradeList = [gradeEnglish, gradeMath, gradeSocStud, gradePhyEd, extraPoints, chorePoints]
const kidProfile = [kidName[0], kidcurrentPoints[0], gradeList]
const gradeTotal = function(gradeEnglish, gradeMath, gradeSocStud, gradePhyEd, extraPoints, chorePoints) {
    return (gradeEnglish + gradeMath + gradePhyEd + gradeSocStud + chorePoints + extraPoints) / 6;
};

const afterMessage = function(currentPoints){
    const final = gradeTotal(gradeEnglish,gradeMath,gradePhyEd,gradeSocStud, extraPoints, chorePoints) + currentPoints;
    return final

}
console.log(afterMessage(kidcurrentPoints[2]), kidProfile)

// console.log(gradeTotal(90, 90, 88, 82, 82, 90))

// const calcTotalPoints = function(points) {
//     return 
// }
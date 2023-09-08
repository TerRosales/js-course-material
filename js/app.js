
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


const day = 'monday';

switch(day){
    case 'monday': // means the same as - day === 'monday'
        console.log ('Work at 6:30pm - 12:30am');
        console.log ('Do Homework and try not to fall behind');
        console.log ('Exercise a little bit, both coding and your actual body');
        console.log ('Make sure to help Rosy as much as you can');
    break;
    case 'tuesday':
        console.log ('Work at 6:30pm - 5:00am');
        console.log ('Exercise a little bit, both coding and your actual body');
        console.log ('Class at 2pm, Be on time');
        console.log ('Stay ahead of your main challenger which is the present you!');
    break;
    case 'wednesday':
        console.log ('Work at 6:30pm - 12:30am');
        console.log ('Exercise a little bit, both coding and your actual body');
        console.log ('Do JS practices');
    break;
    case 'thursday':
        console.log ('Work at 6:30pm - 12:30am');
        console.log ('Exercise a little bit, both coding and your actual body');
        console.log ('Class at 2pm, Be on time');
        console.log ('Stay ahead of your main challenger which is the present you!');
    break;
    case 'saturday':
        console.log ('Class at 10am, Be on time');
    break;
    case 'sunday':
        console.log ('Work at 6:30pm - 12:30am');
        console.log ('Exercise a little bit, both coding and your actual body');
    break;
} console.log ("hello world");
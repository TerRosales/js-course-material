
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


let firstName = "Hotaro";
let country = 'Erhoda';
let continent = 'Area 5';
let population = 8392;
let isIsland = true;
let language = "English";
const inheritance = "Creation"
const currentYear = "2058"
const ageHotaro = currentYear - 2050;
const ageMiyuka = currentYear - 301;
const hotaroBirthYear = currentYear - ageHotaro;
let populationDisqualified = 50000;
let populationHigh = 500000;
let populationAverage = 300000;
let populationLow = 90000;
const legalAge = 10;

// console.log (`${firstName} is from ${country} and he inherits the power of ${inheritance}.`) 
if (population >= populationHigh) {
    console.log (`You originally belong to a strong well supplied country, please follow protocol and register to a less populated country, please connect with a Relocation agent for more assistance.`)
} else if(population >= populationAverage) {
    console.log (`You may now enter, please register your role to this new eutopia`)
} else if (population >= populationLow) {
    console.log (`You currently belong to a to a short supplied country, please try again when balances have been made, Take advantage of this flaw by engaging with the country development program. Thank you.`)
} else {
    console.log (`Your country is currently under the disqualification bar, therefore it is protocol procedure for country with these countries to be disbanded and absorbed by country re-selection, please comply and see a Relocation Agent for more information`)
}
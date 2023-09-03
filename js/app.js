
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

let firstName = "Hotaro";
let country = 'Erhoda';
let continent = 'Area 5';
let population = 18392;
let isIsland = true;
let language = "English";
const inheritance = "Creation"
const currentYear = "2058"
const ageHotaro = currentYear - 2050;
const ageMiyuka = currentYear - 301;
const hotaroBirthYear = currentYear - ageHotaro;
let populationFinland = 6000000;
let populationAverage = 33000000;
const legalAge = 10;

console.log (`${firstName} is from ${country} and he inherits the power of ${inheritance}.`) 

if(population > 33000000) {
    console.log ("Erhoda's population is above average")
} else {
    console.log ("Erhoda's population is below average")
}
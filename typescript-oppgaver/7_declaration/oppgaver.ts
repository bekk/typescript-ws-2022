// OPPGAVE 1 - Declaration files

// I denne oppgaven skal du lage en typedeklarasjon av funksjonene 
// fra 'is-vegan' som er brukt nedenfor.

// Ts-lint melder i fra om følgende:
//Could not find a declaration file for module 'is-vegan'. 
// typescript-ws-2022/node_modules/is-vegan/dist/index.js' implicitly has an 'any' type.
///  Try `npm i --save-dev @types/is-vegan` if it exists or add a new declaration 
//(.d.ts) file containing `declare module 'is-vegan';
import * as isVegan from 'is-vegan';


isVegan.isVeganIngredient('soy');

isVegan.isVeganIngredientList(['milk', 'tomato'])

console.log(isVegan.checkIngredients(['cheese', 'apple', 'bread']))
export {};

// OPPGAVE 1 - Generiske typer

// Gjør om så funksjonen returnerer samme type som man sendte inn
const returnInput = (input: any) => {
    return input;
}


// OPPGAVE 2 - Generiske typer med forbehold

// Gjør om slik at vår generiske verdi må inneholde en id som er et tall
const sortById = <T>(data: Array<T>): Array<T> => {
    return data.sort((a,b) => a.id - b.id);
}

const unsortedData = [{id: 2, value: 'på'}, {id: 1, value: 'hei'}, {id: 3, value: 'deg'}]
const sortedResult = sortById(unsortedData);
console.log(sortedResult); // skal nå være sortert etter id


// OPPGAVE 3 - Hent ut en prop på en generisk type

type Menu = {
    name: string;
    price: number;
    discount?: number;
}
// Bytt ut slik at key faktisk er en nøkkel fra Menu. 
// Endre returtype så vi beholder riktig type uansett hvilken property vi henter ut
const getMenyValue = (menu: Menu, key: string): any => {
    return menu[key];
}

const menu = {name: 'salad', price: 40}
const menuValue = getMenyValue(menu, 'name');
console.log(typeof menuValue); // skal gi string hvis key = 'name', number hvis key = 'price' osv



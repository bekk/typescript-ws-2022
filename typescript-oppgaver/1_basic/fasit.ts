// Oppgave 1. Sett typer på variablene under

let age: number = 0.5;

let isActive: boolean = true;

let status: string = `Covid-19 er ${age} år og ${ isActive ? 'er fortsatt aktiv :(' : 'er ikke lenger aktiv :)' }`;

console.log(status);

// Oppgave 2. Sett på typer slik at det ikke er noen feil, men det som er kommentert ut gir feil.

function hello(name: string): string {
    return `Hello ${name}`;
}

hello('Bob');
//hello([1, 2, 3]); // Skal gi feil om du kommenterer inn.


function square(baseValue: number) : number {
    return baseValue * baseValue
}

square(3);
// square('hello'); // Skal gi feil om du kommenterer inn.


function mySalary(name : string, salary : number) : string {
    return `My name is ${name}, and I make ${salary}$ each year`;
}

mySalary("Messi", 41000000)
//mySalary(60000, "Chris") // Skal gi feil om du kommenterer inn.

export function returnNothing() : void {
    console.log("Sometimes we don't return anything!")
}

// Oppgave 3. Hvorfor er det lov å kalle anythingCanBeAny(5) og anythingCanBeAny('heisann')?
// Sett typer på funksjonen så det er synlig hva som skjer (trenger ikke være logisk kode).
export function anythingCanBeAny(anything : any) : any {
    return anything
}

const a: number = anythingCanBeAny(5);

const b: string = anythingCanBeAny('heisann');
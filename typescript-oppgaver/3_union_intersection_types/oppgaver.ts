// Oppgave 1:
// Definer tre typer 'forrett', 'hovedrett' og 'dessert'. Hver type skal inneholde følgende:
// 'forrett': drikke, matType (to valg - enten 'vegetar' eller 'kjøtt')
// 'hovedrett': drikke, matType og tilbehør
// 'dessert': drikke og en ikke-obligatorisk egenskap på om desserten skal være vegansk.
// Definér en type som heter 'Middag' og som er en intersection type av 'forrett', 'hovedrett' og 'dessert'.
// (EKSTRA) Hva er konsekvensene av å bruke et objekt av typen 'Middag' til å representere en hel middag?

// Oppgave 2:
// Definer en type, 'UtvidetMiddag', som utvider ´Middag´ slik at den kan holde på egenskapene
// 'spritType' (som kan enten være 'vodka', 'snaps' eller 'portvin') og antall enheter

// Oppgave 3:
// Skriv om funksjonen slik at inputparametrene a og b er en union type av string og number.
// Hva må du erstatte '??' med for at funksjonen skal returnere? (Tips --> sjekk ut hvordan 
// du kan bruke 'typeof' til din fordel) 

function add(a: any, b: any) {
  if (??) {
    return a + b;
  }
  if (??) {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */
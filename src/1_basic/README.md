# Oppgave 1 - TypeScript basics

## Primitiver

TypeScript støtter alle de samme typene som du ville forventet i JavaScript, i tillegg til blant annet _Enums_ (mer om dette senere). De vanligste primitivene i JavaScript er `string`, `number` og `boolean`. Alle disse har en tilhørende _type_ i TypeScript.

### Typeannotasjoner på variabler

Når du deklarerer en variabel med `const`, `var` eller `let`, kan du velge å legge til en typeannotasjon for å eksplisitt spesifisere typen til variabelen. I de fleste tilfeller er ikke dette nødvendig, siden TypeScript prøver å _automatisk utlede_ typene i koden din.

Eksempel:  
`let navn = "Alice";`  
`let navn: string = "Alice";`

## Funksjoner

TypeScript gjør det mulig å spesifisere typene til både input- og ouput-verdiene til funksjoner. Dette kjenner vi igjen fra objektorienterte språk som f.eks. Java.

### Typeannotasjoner på input-parametre

Når du deklarerer en funksjon kan du legge til typeannotasjoner på input-parametre, for å definere hvilke typer parametre funksjonen godtar. TypeScript vil da sjekke argumentene du sender inn til denne funksjonen.

Eksempel:  
`function hello(name: string) { console.log("Hello, " + name.toUpperCase()); }`

`hello(21)` vil resultere i en advarsel og kompileringsfeil.

### Returtypeannotasjoner

På samme måte som typeannotasjoner på variabler vil TypeScript som regel _automatisk utlede_ returtypen(e) til en funksjon, ved å se på utrykket i `return-statement`, og kan derfor trygt utelates. Grunner til å inkludere dette likevel kan være dokumentasjonsformål, personlig preferanse eller for å unngå tilfeldige feil.

## Ressurser

1. [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

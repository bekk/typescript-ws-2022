# Type declaration

_Type declaration files_ er egne TypeScript-filer som kun inneholder type informasjon. De har filnavn på typen `<filnavn>.d.ts`. Slike filer brukes for å legge til typer på Javascript-pakker.

## DefinitelyTyped

Det finnes et eget sentralisert repo som inneholder _declaration files_ for tusenvis av biblioteker. Det heter [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/). Disse deklarasjonsfilene blir automatisk publisert til npm under `@types/`. Typedeklarasjons-pakkene har ofte det samme navnet som den orginale pakken.

For eksempel så heter React sin typedeklarasjons-pakke `@types/react`. Denne trenger man for å få typedefinisjoner til et React-prosjekt. Den lastes ned som en vanlig npm-pakke med følgende kommando:

```
npm install --save-dev @types/react
```

Noen npm-pakker har inkludert deklarasjonsfiler i pakken. Da er det ikke nødvedig å laste ned korresponderende `@types/`-pakke. For eksempel så pakker
`date-fns` med typedeklarasjonfiler.

## Lage egne deklarasjonsfiler

Dersom du bruker et biblitek som ikke selv er typet eller har en typedefinisjon på DefinitelyTyped kan man lage egne _declaration files_. Det skal vi se litt nærmere på i oppgaven.

I dette repoet må typedeklarasjonsfiler legges under mappen `typer`. Den må også ligge i en mappe med samme navn som npm-pakken.

```
typescript-oppgaver
│
...
│
│└───7_declaration
    │   oppgaver.ts
    │   fasit.ts
    │   README.md
│
└───typer
│   │
│   │
│   └───<pakke-navn>
│       │   index.d.ts
│
│

```

## Ressurser

- [Dokumentasjon](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [Medium-artikkel](https://medium.com/jspoint/typescript-type-declaration-files-4b29077c43)

// OPPGAVE 1

// Bruk en passende utility type for å definere typen til objektet navigationInfo (fjern any).

const navigationInfo: any = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact", info: "Contact information" },
  stickers: { title: "Stickers", url: "/stickers" , info: "Find stickers" },
};


// OPPGAVE 2

// Bruk Omit til å definere en ny type (navigationInfo2), med færre faner.
// Det er valgfritt hvilke(n) du velger å fjerne.


// OPPGAVE 3

// Bruk en passende utility type for å definere typen til objektet rex (fjern any).

type Person = {
    name: string
    age: number
    address: string
    occupation: string
  }

const rex: any = {name: "Kong Harald", age: 85}

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */
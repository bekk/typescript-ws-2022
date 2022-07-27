// FASIT 1 - RECORD

// Her kan man bruke Record til å lage en type som bruker en liste av attributtene 
// Keys (NavigationPages) og gir dem verdiene til Type (PageInfo).

// Liste med nøkler:
type NavigationPages = "home" | "about" | "contact" | "stickers";

// The shape of the data for which each of ^ is needed:
type PageInfo = {
  title: string;
  url: string;
  info?: string;
}

type navigationRecord = Record<NavigationPages, PageInfo>;

const navigationInfo: navigationRecord = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact", info: "Contact information" },
    stickers: { title: "Stickers", url: "/stickers" , info: "Find stickers" },
  };


// FASIT 2 - OMIT

// Her har vi brukt Omit til å definere en ny type navigationInfo2, hvor stickers er fjernet. 

type navigationOmit = Omit<navigationRecord, "stickers" | "about">

const navigationInfo2: navigationOmit = {
    home: { title: "Home", url: "/" },
    contact: { title: "Contact", url: "/contact", info: "Contact information" },
  };


// FASIT 3 - PICK

// Her har vi brukt Pick til å definere en ny type (BasicUser), som kun har attributtene name og age. 


type Person = {
  name: string
  age: number
  address: string
  occupation: string
}

type BasicUser = Pick<Person, "name" | "age">

const rex: BasicUser = {name: "Kong Harald", age: 85}

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */
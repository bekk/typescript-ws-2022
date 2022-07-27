// OPPGAVE 1 - FASIT

const returnInput = <T>(input: T) => {
  return input;
};

// OPPGAVE 2 - FASIT

const sortById = <T extends { id: number }>(data: Array<T>): Array<T> => {
  return data.sort((a, b) => a.id - b.id);
};
const unsortedData = [
  { id: 2, value: "på" },
  { id: 1, value: "hei" },
  { id: 3, value: "deg" },
];
const sortedResult = sortById(unsortedData);
console.log(sortedResult); // skal nå være sortert etter id

// OPPGAVE 3 - FASIT

type Menu = {
  name: string;
  price: number;
  discount?: number;
};

const getMenyValue = <K extends keyof Menu>(menu: Menu, key: K): Menu[K] => {
  return menu[key];
};

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */

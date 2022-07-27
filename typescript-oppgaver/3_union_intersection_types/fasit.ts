// Oppgave 1

enum MatType {
  VEGETAR = "Vegetar",
  KJØTT = "Kjøtt",
}

// Alternativt:
// type MatType2 = 'Vegetar' | 'Kjøtt'
// Hva er fordelen med denne tilnærmingen?

type Forrett = {
  drikke: string;
  matType: MatType;
};

type Hovedrett = {
  drikke: string;
  matType: MatType;
  tilbehør: string;
};

type Dessert = {
  drikke: string;
  Vegansk?: boolean;
};

type Middag = Forrett & Hovedrett & Dessert;

// Konsekvensene av å definere en middag av typen 'Middag' er en rimelig kjip og sær middag som
// består av samme drikke og matType til både forret, hovedrett og dessert og man får ikke
// velge tilbehør eller vegansk dessert

// Oppgave 2:
enum SpritType {
  VODKA = "Vodka",
  SNAPS = "Snaps",
  PORTVIN = "Portvin",
}

type UtvidetMiddag = Middag & { spritType: SpritType; antallEnheter: number };

// Oppgave 3
type inputParams = string | number;
function add(a: inputParams, b: inputParams) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}


export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */
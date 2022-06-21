// Oppgave 1
enum MatType {
  VEGETAR = "Vegetar",
  KJØTT = "KJØTT",
}

type Vegansk = "Vegansk";

enum Avec {
  AVECMEDKAFFE = "Avec med kaffe",
  AVECUTENKAFFE = "Avec uten kaffe",
}

type DessertDrikke = {
  avec: Avec;
};

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
  drikke: DessertDrikke;
  Vegansk: Vegansk | undefined;
};

// Oppgave 2:
type Middag = Forrett & Hovedrett & Dessert;

// Oppgave 3:
enum SpritType {
  VODKA = "Vodka",
  SNAPS = "Snaps",
  PORTVIN = "Portvin",
}

type UtvidetMiddag = Middag & { spritType: SpritType; antallEnheter: number };

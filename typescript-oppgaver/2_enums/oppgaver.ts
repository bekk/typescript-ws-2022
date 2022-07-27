// Oppgave 1: Lag en type som definerer et måltid med egenskapene 'verdenskjøkken'
// (f.eks. italiensk, thai, kinesisk) og 'kjøttType' (f.eks. svin, okse, lam eller kylling))

// Oppgave 2
// Hva må vi sette c.kind til, for at feilen skal forsvinne?
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square, // Hva kan vi sette kind til?
  radius: 100,
};

// Oppgave 2 - Ekstra
// Har du testet å sette kind til 0 eller 1? Hva med 1337? Kompilerer koden?

// Oppgave 3 (diskusjon med personen ved siden av deg) hvilke pros og cons finnes det for å bruke enums?

// Oppgave 4
// Hvorfor får vi feilen i koden nedenfor?
enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
    //
  }
}

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */

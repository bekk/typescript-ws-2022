// Oppgave 1: Lag en enum som definerer et måltid med egenskapene 'verdenskjøkken'
// (f.eks. italiensk, thai, kinesisk) og 'kjøttType' (f.eks. svin, okse, lam eller kylling))

// Oppgave 2
// Hvilke to muligheter har vi på å sette c.kind til, for at feilen skal forsvinne?
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

// Oppgave 1
enum Verdenskjøkken {
  Italiensk,
  Thai,
  Kinesisk,
}

enum Kjøttype {
  Svin,
  Okse,
  Lam,
  Kylling,
}

// Oppgave 2
// c.kind = 1 eller c.kind = ShapeKind.Circle

// Oppgave 4
// Først sjekker if-blokken om x ikke er lik E.Foo. Dersom denne første delen av sjekken evalueres til true
// kjøres koden inne i if-blokken. Dersom den første delen av sjekken evalueres til false kan x bare
// være E.Foo, så derfor vil det aldri være aktuelt å sjekke om x er lik E.Bar. For å forstå mer av
// hvordan TypeScript klarer å fange denne inkorrekte sammenligningen av verdier kan du
// sjekke ut https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */

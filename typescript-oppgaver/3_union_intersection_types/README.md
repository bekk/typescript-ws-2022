# Oppgave 3 - Union- og intersection-typer

## Intro

I mengdelære i matematikken lærer vi om blant annet union og snitt (intersection) av to mengder. La oss se på to eksempler:

Mengde A er definert som `A={0,1,2,3,4,5,6,7}` og mengde B er definert som `B={2,3,4,8,9}`, da er

- Unionen av `A` og `B` er lik `{0,1,2,3,4,5,6,7,8,9}`,
- og snittet av `A` og `B` er lik `{2,3,4}`.

## Definering av _union type_ og _intersection type_

I TypeScript er definisjonen noe annerledes. Union types brukes til å komponere en ny type som kan være én type av to eller flere eksisterende typer. Et eksempel kan være en funksjon som kan håndtere `string` eller `number` som input, og man slipper å bruke typen `any`. For å lage en union type bruker man symbolet `|` og kan leses som `Or`-operatoren.

_Intersection types_ defineres med symbolet `&` og kan leses som `And`-operatoren. Definerer man en _intersection type_ av to eller flere eksisterende typer A og B, kombinerer man alle egenskapene i A og B til én ny type.

```typescript
type A {
    m: string,
    a: number,
    t: boolean
};

type B {
    d: string,
    r: number,
    i: string,
    n: boolean,
    k: number
};

type C = A & B;

type D = A | B;

```

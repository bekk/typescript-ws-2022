# Oppgave 3 - Union- og intersection-typer

## Intro

I mengdelære i matematikken lærer vi om blant annet union og snitt (intersection) av to mengder. La oss se på to eksempler:

Mengde a er definert som `A={0,1,2,3,4,5,6,7}` og mengde b er definert som `B={2,3,4,8,9}`, da er

- Unionen av `A` og `B` er lik `{0,1,2,3,4,5,6,7,8,9}`,
- og snittet av `A` og `B` er lik `{2,3,4}`.

I TypeScript har vi samme funksjonalitet for typer.

## Intersection

Symbolet `&` brukes for å lage en intersection type av to eller flere typer:

```
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

## Intersection
Symbolet `|` brukes for å lage en union type av to eller flere typer.
```

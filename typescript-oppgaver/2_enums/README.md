# Oppgave 2 - TypeScript enums

## Intro

Se for deg at du ønsker å opprette objekter av følgende type:

```
type Matrett {
    hovedingrediens: string,
    tilbehør: string,
    drikke: string
}
```

Her definerer vi et objekt hvor alle egenskapene er av typen `string`.

_Enums_ er en måte å definere navngitte konstanter på som vi kan bruke i f.eks. objekter av typen `Matrett`. Enums er en datastruktur som har konstant lengde og som inneholder konstante verdier. Navnet kommer fra _enumerated types_ og er nyttig å bruke når det er meningen at f.eks. inputparametretil en funksjon bare skal kunne ha en verdi fra et spesielt utvalg av mulige verdier.

## Definere enums

Enums kan defineres på følgende vis:

- string eller number

```
enum Fisker {
    TORSK = 'Torsk',
    SEI = 'Sei',
    HYSE = 'Hyse',
}
```

```
enum Fisker {
    TORSK = 1,
    SEI = 2,
    HYSE = 3,
}
```

alternativt:

```
enum Fisker {
    TORSK,
    SEI,
    HYSE,
}
```

eller

```
enum Fisker {
    TORSK = 1,
    SEI,
    HYSE,
}
```

- Verdier som er beregnet av binære operatorer med konstante enum-verdier som operander (beklager oversettelsen fra engelsk til norsk):

```
enum Fisker {
    TORSK = 1+1,
    SEI = 2*9,
    HYSE = 12%7,
    LAKS = 1>>1
}
```

- Én av unary operatorene på et konstant enum-uttrykk:

```
enum PrimitiveOperasjoner {
    Pluss = +1,
    Minus = -1,
    Tilde = ~1
}
```

- Funksjonskall og referanser til tidligere definerte enums:

```
enum MatteOperasjoner {
PlussEn = PrimitiveOperasjoner.Pluss
ToPlussTo = add(2,2) // Om denne funksjonen defineres
}
```

## Heterogene enums

Dette er faktisk enums som kan bestå av `string`- og `number`-verdier:

```
enum HeteroEnum {
En = 1,
Hest = 'Hest'
}
```

## Hvordan kompileres `enum`s til JavaScript?

# Type Guards

Type Guards er spesielle operatorer/funksjoner som hjelper til å utlede hvilken type variablen en har innenfor en conditional block. Dette kan også kalles å _narrow down_ typen.

Javascript har operatorene `typeof` og `instanceof` som kan gi informasjon om typen til variabler i runtime. I Typscript kan slike operatorer brukes som type guards.

Vi tar et eksempel:

```typescript
const formaterPris = (pris: number | string) => {
  /* 
    ERROR:
    Property "toFixed" does not exist on type "string | number"
    Property "toFixed" does not exist on type "string" 
  */
  return pris.toFixed(2);
};
```

Med bruk av operatoren `typeof` kan man utlede hvilken type man før man bruker toFixed(). Her vil TypeScript vite at man har en string i den første blokken og number hvis den når andre blokken.

```typescript
const formaterPris = (pris: number | string) => {
  // "price" is of a "number | string" type
  if (typeof pris === "string") {
    // "price" is of a "string" type
    return parseInt(pris, 10).toFixed(2);
  }
  // "price" is of a "number" type
  return pris.toFixed(2);
};
```

Andre operatorer som også kan brukes som type guards kan du lese mer om her:

- [📘 instanceOf](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)
- [📙 in](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)

## Brukergenererte type guards

Noen ganger holder det ikke med de innbygde operatorene og da kan brukergenerete type guards være veldig nyttig. En brukergenerert type guards er egentlig kun en funksjon der returtypen er en _type predicate_. Funksjonen må også inneholde en sjekk som kan bestemme om variablen er av riktig type.
I eksempelet under er `isFish` en type guard der returtypen er `pet is Fish` som er en *type predicate\_. En *type predicate\* er på formatet `parameterName is Type`.

```typescript
type Fish = {
  name: string;
  swim: () => void;
};

type Bird = {
  name: string;
  fly: () => void;
};

type Pet = Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```

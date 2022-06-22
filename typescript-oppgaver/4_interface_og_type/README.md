## Interface og type

`Interface` og `type` er måter vi kan beskrive hvordan noe skal se ut i typescript. Det er små forskjeller mellom dem og en del uenighet om hva som er best å bruke.

Slik kan man definere hvordan et meny-objekt skal se ut på de to ulike måtene:

```typescript
interface Menu {
  title: string;
  price: number;
  discount?: number;
}
```

```typescript
type Menu = {
  title: string;
  price: number;
  discount?: number;
};
```

Dette kan så brukes slik:

```typescript
const lunchMenu: Menu = {
  title: "pizza",
  price: 30,
  outOfStock: true, // gir feilmelding fordi outOfStock ikke er definert på typen Menu
};
```

Skal man angi en type for en primitiv verdi er det derimot kun `type` som gjelder

```typescript
type Title = string;
```

Funksjoner kan også types:

```typescript
interface GetPrice {
  (menus: Array<Menu>): number;
}
```

```typescript
type GetPrice = (menus: Array<Menu>) => number;
```

### Utvide en eksisterende type

Hvis vi alt har en type eller et interface og ønsker å legge til noe mer kan dette gjøres på ulike måter.
For et interface kan man fortsette å assigne på det samme interfacet:

```typescript
interface Menu {
  vegeterian: boolean;
}
```

Nå vil definisjonen av Menu inneholde fire props; de tre forrige vi la til, og den nye vi la til nå. Dette går ikke an med `type`.

Man kan også velge å lage en ny type som extender den forrige typen for å legge på verdier. Dette gjøres litt ulikt avhengig av om man bruker `type` eller `interface`.

```typescript
type SummerMenu = {
  vegeterian: boolean;
} & Menu;
```

```typescript
interface SummerMenu extends Menu {
  vegeterian: boolean;
}
```

### Union av flere typer

Hvis du ønsker å beskrive et objekt som enten A eller B kan du type det som en union. Dette går kun an med `type`.

```typescript
type Restaurant = {
  id: number;
  name: string;
  numberOfTables: number;
};

interface Cafeteria {
  name: string;
  numberOfTables: number;
  location: string;
}

type Bussiness = Restaurant | Cafeteria;
```

### Ressurser

https://www.typescriptlang.org/docs/handbook/2/objects.html

https://wicki.io/posts/2022-01-quick-comparison-interface-vs-type-alias/

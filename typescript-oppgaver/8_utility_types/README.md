# Utility Types

TypeScript tilbyr mange ulike _Utility Types_ for å lettere kunne gjøre _transformasjoner_ på typer. Disse brukes gjerne når man allerede har definert en gitt type, men ønsker å bruke den et sted hvor man har behov for å gjøre små endringer. Dette tillater oss å manipulere en type, f.eks. ved å fjerne eller legge til et attributt, eller gjøre noe required/optional. I denne delen av workshopen skal vi se nærmere på noen av de mest populære utility-typene. Utility types er globalt tilgjengelig, og er implementert ved å ta i bruk _Generics_, som vi så på tidligere i del 6.

## Partial

`Partial<Type>` gjør det mulig å definere en type med alle attributtene til `Type` satt til optional. Dette kan være nyttig når man lager oppdateringslogikk for et objekt.

```typescript
type Menu = {
  title: string;
  price: number;
  discount?: number;
};

type PartialMenu = Partial<Menu>;

// Dette resulterer i følgende type:

// type PartialMenu = {
//   title?: string;
//   price?: number;
//   discount?: number;
// };

const PizzaMenu: PartialMenu = { title: "pizza" };
```

## Required

Required gjør det motsatte av Partial. `Required<Type>` konstruerer en type med alle attributtene til `Type` satt til required.

```typescript
type Menu = {
  title: string;
  price: number;
  discount?: number;
};

type RequiredMenu = Required<Menu>;

// Dette resulterer i følgende type:

// type RequiredMenu = {
//   title: string;
//   price: number;
//   discount: number;
// };

const PizzaMenu: RequiredMenu = { title: "pizza", price: 159, discount: 10 };
```

## Record

Record er en rask og praktisk måte å definere en objekttype på, med en spesifikk keys-type og value-type. `Record<Keys, Type>` konstruerer en type med keys: `Keys` og verdier: `Type`.

```typescript
type RestaurantInfo = {
  id: number;
  booking: boolean;
  numberOfTables: number;
};

type RestaurantNames = "smalhans" | "kolonialen" | "lorry";

const restaurants: Record<RestaurantNames, RestaurantInfo> = {
  smalhans: { id: 1, booking: true, numberOfTables: 15 },
  kolonialen: { id: 2, booking: true, numberOfTables: 8 },
  lorry: { id: 3, booking: false, numberOfTables: 25 },
};
```

## Pick

Pick brukes for å "plukke ut" et sett av attributter fra en annen type. `Pick<Type, Keys>` konstruerer en type ved å plukke ut attributtene `Keys` (union av strings) fra `Type`.

```typescript
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## Omit

Omit er på mange måter det motsatte av Pick. `Omit<Type, Keys>` konstruerer en ny type ved å kopiere alle attributtene til `Type`, og fjerne de som ligger i `Keys`. Defineres på samme måte som for Pick.

```typescript
type Todo = {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
};

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```

## Ressurser

- [Dokumentasjon](https://www.typescriptlang.org/docs/handbook/utility-types.html)

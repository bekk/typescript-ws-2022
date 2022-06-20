# Utility Types

TypeScript tilbyr mange ulike _Utility Types_ for å lettere kunne gjøre _transformasjoner_ på typer. Disse brukes gjerne når man allerede har definert en gitt type, men ønsker å bruke den et sted hvor man har behov for å gjøre små endringer. Dette tillater oss å manipulere en type, f.eks. ved å fjerne eller legge til et attributt, eller gjøre noe required/optional. I denne delen av workshopen skal vi se nærmere på noen av de mest populære utility-typene. Utility types er globalt tilgjengelig, og er implementert ved å ta i bruk _Generics_, som vi så på tidligere i del 6.

## Partial

`Partial<Type>` gjør det mulig å definere en type med alle attributtene til `Type` satt til optional. Dette kan være nyttig når man lager oppdateringslogikk for et objekt.

```typescript
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` tillater x og y å være optional
pointPart.x = 10;
```

## Required

Required-typen gjør det motsatte av Partial-typen. `Required<Type>` konstruerer en type med alle attributtene til `Type` satt til required.

```typescript
type PartialUser = {
  name: string;
  age: number;
  address?: string;
  occupation?: string;
};

type User = Required<PartialUser>;

// Dette resulterer i følgende type:

// type User = {
//   name: string;
//   age: number;
//   address: string;
//   occupation: string;
// }
```

## Record

Record-typen er en rask og praktisk måte å definere en objekttype på, men en spesifikk keys-type og value-type. `Record<Keys, Type>` konstruerer en type med keys: `Keys` og verdier: `Type`.

```typescript
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

## Omit

Beskrivelse

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
```

## Pick

Beskrivelse

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## Ressurser

- [Dokumentasjon](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## Interface og type
Interface og type er mulige måter vi kan beskrive hvordan noe skal se ut i typescript. Det er små forskjeller mellom dem og en del uenighet om hva som er best å bruke.

Slik kan man definere hvordan et meny-objekt skal se ut på de to ulike måtene:

```js
interface Menu {
    title: string;
    price: number;
    discount?: number;
}
```

```js
type Menu = {
    title: string;
    price: number;
    discount?: number;
}
```

Skal man angi en type for en primitiv verdi er det derimot kun `type` som gjelder
```js
type Title = string;
```


### Utvide en eksisterende type
Hvis vi alt har en type eller et interface og ønsker å


### Ressurser
https://www.typescriptlang.org/docs/handbook/2/objects.html
https://wicki.io/posts/2022-01-quick-comparison-interface-vs-type-alias/
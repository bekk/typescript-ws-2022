## Generiske typer
Selv om typing er vel og bra, så er noe av det fine med javascript nettopp den store friheten man har til å gjøre som man vil uten å bry seg om at alt må være av samme type. Ved å mestre generiske typer i typescript kan man igjen lage funksjoner som tar imot (nesten) hva som helst, samtidig som man får fordelen av typesikkerhet.

La oss ta følgende metode som eksempel: 
```js
export const firstFiveElements = (array) => {
    return array.slice(0, 5);
}
```
Vi ønsker å kunne sende inn et array med hva som helst. Vi ønsker at typescript skal hjelpe oss slik at de som kaller på metoden vår vet at de får samme type array tilbake.
Dette kan vi få til ved å legge på en generisk type som vi har gitt navnet T (det kan godt være et annet navn også, men T er konvensjon)
```js
export const firstFiveElements = <T>(array: Array<T>): Array<T> => {
    return array.slice(0, 5);
}
```
Sender du nå inn en liste av strings vet du at du får en liste av strings tilbake også.

### Generiske typer med forbehold
Noen ganger ønsker vi å sette noen forbehold for den generiske verdien. La oss ta for oss følgende funksjon:

```js
const getLength = <T>(input: T): number => {
    return input.length; // dette vil gi feil!
}
```
Vi vet at input skal ha en property som heter length, men resten av input vet vi ingenting om. For å sette noen restriksjoner rundt hva T kan være kan vi skrive `T extends` (og typen vi vet noe om).

```js
type LengthType = {
    length: number;
}
const getLength = <T extends  LengthType>(input: T): number => {
    return input.length;
}
```
Nå kan denne metoden kalles med et array som input siden arrays har en length-property. Den kan også kalles med et egendefinert objekt hvis vi har definert at objektet har en length-property.

### Hent ut en prop på en generisk type
Hvis vi skal aksessere en property på en generisk type kan vi bruke `keyof` operatoren. Dette blir også kalt for en index access type. I koden nedenfor har vi definert `K extends keyof T`. Da er K en key som finnes på det ukjente typen T.

```js
const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}
```
Vi kan så bruke metoden slik:
```js
const person = {
    name: 'tom',
    age: 5
}
const result = getValue(person, 'age');
console.log(typeof result) // skal gi number
const noResult = getValue(person, 'not a key'); // skal gi error fordi kun "name" og "age" er gyldige keys på personobjektet

```


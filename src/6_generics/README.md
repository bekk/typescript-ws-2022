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
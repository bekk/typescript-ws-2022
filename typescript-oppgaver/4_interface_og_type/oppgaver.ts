// OPPGAVE 1
// Lag en type eller et interface som beskriver følgende objekt:

const Lunch = {
    startTime: 11,
    endTime: 12,
    menu: { 
        title: 'couscous salad', 
        price: 35 
    },
    print: () => console.log('todays lunch will be awesome!')
}

// OPPGAVE 2
// Utvid typen du lagde i forrige oppgave slik at den nå også støtter det nye objektet under. 
// Prøv deg frem med de ulike måtene for utvidelse.

const dinner = {
    startTime: 16,
    endTime: 20,
    menu: { 
        title: 'hamburger', 
        price: 79
    },
    print: () => console.log('todays dinner will be awesome!'),
    attendees: 30
}

// OPPGAVE 3
// Definer typen til names slik at vi kan bruker printNames på følgende to måter

const printNames = (names: any): void => {
    if (Array.isArray(names)) {
        console.log(names.join(" and "));
    } else {
    console.log(names);
    }
}

printNames('tom'); // OK
printNames(['tom', 'jerry']); // OK

printNames(123) // denne skal gi feil!

export {}; /* Denne er med for å unngå at alt defineres i det globale skopet */
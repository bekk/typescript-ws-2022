export {};

// OPPGAVE 1 - FASIT

type Menu = {
    title: string;
    price: number;
}

type Mealtime = {
    startTime: number;
    endTime: number;
    menu: Menu;
    print: () => void;
}

// eller
interface Mealtime2 {
    startTime: number;
    endTime: number;
    menu: Menu;
    print: () => void;
}


// OPPGAVE 2 - FASIT

type Dinner = {
    attendees: number;
} & Mealtime

// eller
interface Dinner2 extends Mealtime {
    attendees: number;
}



const dinner: Dinner2 = {
    startTime: 16,
    endTime: 20,
    menu: { 
        title: 'hamburger', 
        price: 79
    },
    print: () => console.log('todays dinner will be awesome!'),
    attendees: 30
}


// OPPGAVE 3 - FASIT

const printNames = (names: Array<string> | string): void => {
    if (Array.isArray(names)) {
        console.log(names.join(" and "));
    } else {
    console.log(names);
    }
}
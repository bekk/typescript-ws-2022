export {};
// Gjør om så funksjonen blir generisk

const returnInput = (input) => {
    return input;
}


type ValueOf<T> = T[keyof T];
type Person = {
    age: number;
    name: string;
}

type PersonTypes = ValueOf<Person>; // string | number

const people: Array<Person> = [
    {age: 4, name: 'tom'},
    {age: 20, name: 'jerry'},
    {age: 7, name: 'dolly'},
    {age: 12, name: 'minni'},
    {age: 50, name: 'bambi'},
    {age: 77, name: 'betty'},
];

type SortArrayType<T> = ValueOf<{
    [K in keyof T]: {
        key: K,
        sortFunction: (a: T[K], b: T[K]) => number;
    }
}>

// Bytter ut T med Person for å se hva vi får...
type PersonSortType = ValueOf<{
    [K in keyof Person]: {
        key: K,
        sortFunction: (a: Person[K], b: Person[K]) => number;
    }
}>
// det gir oss dette. legg merke til typene til sortfunction. a og b matcher key slik at age gir number, mens name gir string!
type result = {
    key: "age";
    sortFunction: (a: number, b: number) => number;
} | {
    key: "name";
    sortFunction: (a: string, b: string) => number;
}


const sortArray = <T>(array: Array<T>, sortKey: keyof T, sortDefinitions: Array<SortArrayType<T>>): Array<T> => {
    return [...array]
      .sort((a, b) => {
        const definitionForThisColumns = sortDefinitions.find((c) => c.key === sortKey);
        if (!definitionForThisColumns) return 0;
        return definitionForThisColumns.sortFunction(a[definitionForThisColumns.key], b[definitionForThisColumns.key]);
      });
}

const sortDefinition: Array<SortArrayType<Person>> = [
 {
    key: 'name',
    sortFunction: (a, b) => a.localeCompare(b) 
 },
 {
     key: 'age',
     sortFunction: (a, b) => a - b 
 }
]

const result = sortArray(people, 'name', sortDefinition);
console.log(result);



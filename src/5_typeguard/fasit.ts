

type VerdensKjøkkenType = 'ASIATISK' | 'ITALIENSK' | 'FRANSK' | 'INDISK' | 'MEKSIKANSK' | 'NORSK';
type KjøttType = 'KYLLING' | 'SVIN' | 'STORFE' | 'KJØTTDEIG' | 'PØLSE';
enum FiskArtType { 'LAKS' = 'laks', 'ØRRET' = 'ørret', 'HYSE' = 'hyse', 'TORSK' = 'torsk', 'SEI' = 'sei' }

type GenerellLunsjInformasjon = {
    allergener: string[],
    navn: string,
    antallGangerServert: number,
    verdensKjøkken: VerdensKjøkkenType,
}

type KjøttholdingRett = GenerellLunsjInformasjon & {
    kjøtt: KjøttType,
}

type FiskeRett = GenerellLunsjInformasjon & {
    fiskeArt: FiskArtType,
    isSuppe: boolean,
}

type VegetarRett = GenerellLunsjInformasjon & {
    isMedBønner: boolean;
    antallGrønnsaker: number
}

type LunsjRett = KjøttholdingRett | VegetarRett | FiskeRett;

const lunsjRetter: LunsjRett[] = [
    { navn: "Chilli con torsk", allergener: ["fisk"], antallGangerServert: 3, verdensKjøkken: 'MEKSIKANSK', isSuppe: false, fiskeArt: FiskArtType.TORSK },
    { navn: "Soppgrateng", allergener: ["gluten"], antallGangerServert: 2, verdensKjøkken: 'FRANSK', isMedBønner: false, antallGrønnsaker: 1 },
    { navn: "Bergens fiskesuppe", allergener: ["fisk", "skalldyr", "gluten"], antallGangerServert: 5, verdensKjøkken: 'NORSK', isSuppe: true, fiskeArt: FiskArtType.SEI },
    { navn: "Fiskekaker med ovnsbakte grønnsaker", allergener: ["fisk", 'nøtter'], antallGangerServert: 10, verdensKjøkken: 'NORSK', isSuppe: false, fiskeArt: FiskArtType.HYSE },
    { navn: "Tikka Masala", allergener: ["laktose", 'nøtter'], antallGangerServert: 10, verdensKjøkken: 'INDISK', kjøtt: 'KYLLING' },
    { navn: "Loaded veggie nachos", allergener: [], antallGangerServert: 2, verdensKjøkken: 'MEKSIKANSK', isMedBønner: true, antallGrønnsaker: 6 }
]



//Brukerdefinert type guards for FiskeRett og VegetarRett gjort på to ulike måter, men oppnår det samme. 
function isFiskeRett(lunsjRett: LunsjRett): lunsjRett is FiskeRett {
    return Boolean((lunsjRett as FiskeRett).fiskeArt);
}

function isVegetar(lunsjRett: LunsjRett): lunsjRett is VegetarRett {
    return (lunsjRett as VegetarRett).isMedBønner !== undefined;
}

export const getLunsj = (lunsjRetter: LunsjRett[]): void => {
    lunsjRetter.forEach((lunsjRett) => {
        if (isVegetar(lunsjRett)) {
            console.log(`${lunsjRett.navn} har ${lunsjRett.antallGrønnsaker} grønnsaker`);
        }
        else if (isFiskeRett(lunsjRett)) {
            console.log(`${lunsjRett.navn} inneholder ${lunsjRett.fiskeArt}`);
        }
        else {
            console.log(`${lunsjRett.navn} inneholder kjøtt`);
        }
    })
};

getLunsj(lunsjRetter);
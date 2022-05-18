

type AnsvarType = 'PERSONALLEDER' | 'FAGANSVARLIG';
enum  ANSVAR  {'PERSONALLEDER' = 'Personalleder', 'FAGANSVARLIG' = 'Fagansvarlig' }

export type Konsulent =  GenerellAnsattInformasjon & {
    erSpiritMedlem: boolean;
}
export type SeniorKonsulent = GenerellAnsattInformasjon & {
    ansvar: ANSVAR;
}

export interface GenerellAnsattInformasjon {
    navn: string,
    alder: number,
    ansinitet: number
}

export type BekkAnsatt = Konsulent | SeniorKonsulent;


// Eksempel på typeguard
function isKonsulent(ansatt: BekkAnsatt): ansatt is Konsulent {
    return (ansatt as Konsulent).erSpiritMedlem !== undefined;
  }
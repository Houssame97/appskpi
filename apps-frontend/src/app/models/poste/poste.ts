import { Audit } from '../audit/audit';

export class Poste {
  idPoste: number;
  nomPoste: string;
  descriptionPoste: string;
  audit: Audit = new Audit();
  constructor()
  constructor(idPoste?: number, nomPoste?: string, descriptionPoste?: string){
    this.idPoste = idPoste;
    this.nomPoste = nomPoste;
    this.descriptionPoste = descriptionPoste;
  }
}

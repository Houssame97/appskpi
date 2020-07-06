import { Audit } from '../audit/audit';

export class Capabilite {
  idCapabilite: number;
  nomCapabilite: string;
  descriptionCapabilite: string;
  audit: Audit = new Audit();
  constructor()
  constructor(idCapabilite?: number, nomCapabilite?: string, descriptionCapabilite?: string){
    this.idCapabilite = idCapabilite;
    this.nomCapabilite = nomCapabilite;
    this.descriptionCapabilite = descriptionCapabilite;
  }
}

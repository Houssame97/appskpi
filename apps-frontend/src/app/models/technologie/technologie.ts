import { Audit } from '../audit/audit';

export class Technologie {
  idTechnologie: number = null;
  nomTechnologie: string = null;
  audit: Audit = new Audit();
  constructor()
  constructor(idTechnologie?: number, nomTechnologie?: string){
    this.idTechnologie = idTechnologie;
    this.nomTechnologie = nomTechnologie;
  }
}


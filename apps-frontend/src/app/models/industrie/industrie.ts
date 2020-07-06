import { Audit } from '../audit/audit';

export class Industrie {
  idIndustrie: number = null;
  nomIndustrie: string = null;
  audit: Audit = new Audit();
  constructor()
  constructor(idIndustrie?: number, nomIndustrie?: string){
    this.idIndustrie = idIndustrie;
    this.nomIndustrie = nomIndustrie;
  }
}

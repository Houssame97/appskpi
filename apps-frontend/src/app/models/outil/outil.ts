import { Audit } from '../audit/audit';

export class Outil {
  idOutil: number = null;
  nomOutil: string = null;
  categorie: string = null;
  audit: Audit = new Audit();
  constructor()
  constructor(idOutil?: number, nomOutil?: string, categorie?: string){
    this.idOutil = idOutil;
    this.nomOutil = nomOutil;
    this.categorie = categorie;
  }
}

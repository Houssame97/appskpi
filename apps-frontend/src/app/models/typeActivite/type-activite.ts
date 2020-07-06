import { Audit } from '../audit/audit';

export class TypeActivite {
  idTypeActivite: number = null;
  nomTypeActivite: string = null;
  audit: Audit = new Audit();
  constructor()
  constructor(idTypeActivite?: number, nomTypeActivite?: string){
    this.idTypeActivite = idTypeActivite;
    this.nomTypeActivite = nomTypeActivite;
  }
}

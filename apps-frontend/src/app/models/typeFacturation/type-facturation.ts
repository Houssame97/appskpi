import { Audit } from '../audit/audit';

export class TypeFacturation {
  idTypeFacturation: number = null;
  nomTypeFacturation: string = null;
  audit: Audit = new Audit();
  constructor()
  constructor(idTypeFacturation?: number, nomTypeFacturation?: string){
    this.idTypeFacturation = idTypeFacturation;
    this.nomTypeFacturation = nomTypeFacturation;
  }
}

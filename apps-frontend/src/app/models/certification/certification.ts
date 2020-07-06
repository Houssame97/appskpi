import { Audit } from '../audit/audit';

export class Certification {
  idCertification: number;
  intitule: string;
  editeur: string;
  audit: Audit = new Audit();
  constructor()
  constructor(idCertification?: number, intitule?: string, editeur?: string){
    this.idCertification = idCertification;
    this.intitule = intitule;
    this.editeur = editeur;
  }
}

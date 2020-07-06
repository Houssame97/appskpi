import { Audit } from '../audit/audit';
import { Certification } from '../certification/certification';
import { Ressource } from '../ressource/ressource.model';

export class RessourceCertification {
  idRessource_Certification: number;
  certification: Certification;
  ressource: Ressource;
  annee_obtention: number;
	obtenue_a_dxc: boolean;
	niveau_de_maitrise: number;
  audit: Audit = new Audit();
  constructor()
  constructor(idRessource_Certification?: number, certification?: Certification, ressource?: Ressource, annee_obtention?: number,
    obtenue_a_dxc?: boolean, niveau_de_maitrise?: number){
      this.idRessource_Certification = idRessource_Certification;
      this.certification = certification;
      this.ressource = ressource;
      this.annee_obtention = annee_obtention;
      this.obtenue_a_dxc = obtenue_a_dxc;
      this.niveau_de_maitrise = niveau_de_maitrise;
  }
}

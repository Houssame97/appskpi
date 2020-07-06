import { Poste } from '../poste/poste';
import { Audit } from '../audit/audit';

export enum EnumSuperiorite {
  Default, Architecte, DL, CM, DSL
}

export class Ressource {
  idRessource: number = null;
  nomRessource: string = null;
  prenomRessource: string = null;
  matricule: string = null;
  email: string = null;
  telephone: string = null;
  adresse: string = null;
  rate: number = null;
  nbr_annee_dxc: number = null;
  nbr_annee_global: number = null;
  niveau_superiorite: EnumSuperiorite = null;
  audit: Audit = new Audit();
  poste: Poste = null;

  constructor()
  constructor(nomRessource?: string, prenomRessource?: string, matricule?: string, email?: string,
              telephone?: string, adresse?: string, rate?: number, nbr_annee_dxc?: number,
              nbr_annee_global?: number, niveau_superiorite?: EnumSuperiorite,
              poste?: Poste ){
    this.nomRessource = nomRessource;
    this.prenomRessource = prenomRessource;
    this.matricule = matricule;
    this.email = email;
    this.telephone = telephone;
    this.adresse = adresse;
    this.rate = rate;
    this.nbr_annee_dxc = nbr_annee_dxc;
    this.nbr_annee_global = nbr_annee_global;
    this.niveau_superiorite = niveau_superiorite;
    this.poste = poste;
  }
}

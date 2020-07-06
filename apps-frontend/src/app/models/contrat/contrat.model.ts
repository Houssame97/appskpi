import { Audit } from '../audit/audit';
import { Client } from '../client/client.model';
import { TypeFacturation } from '../typeFacturation/type-facturation';
import { TypeActivite } from '../typeActivite/type-activite';


export class Contrat {
  idContrat: number = null;
  descriptionContrat: string = null;
  // tslint:disable-next-line: variable-name
  date_debut: Date = null;
  // tslint:disable-next-line: variable-name
  date_fin: Date = null;
  audit: Audit = new Audit();
  client: Client = null;
  typeFacturation: TypeFacturation = null;
  typeActivite: TypeActivite = null;

  constructor()
  // tslint:disable-next-line: variable-name
  constructor(descriptionContrat?: string, date_debut?: Date, date_fin?: Date,
              client?: Client, typeFacturation?: TypeFacturation, typeActivite?: TypeActivite ) {
    this.descriptionContrat = descriptionContrat;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.client = client;
    this.typeFacturation = typeFacturation;
    this.typeActivite = typeActivite;
  }
}

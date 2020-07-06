import { Audit } from '../audit/audit';
import { Industrie } from '../industrie/industrie';


export class Client {
  idClient: number = null;
  nomClient: string = null;
  audit: Audit = new Audit();
  industrie: Industrie = null;

  constructor()
  constructor(nomClient?: string,
              industrie?: Industrie ) {
    this.nomClient = nomClient;
    this.industrie = industrie;
  }
}

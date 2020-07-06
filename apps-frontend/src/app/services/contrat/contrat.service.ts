import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Contrat } from 'src/app/models/contrat/contrat.model';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) { }

  getContrats() {
    return this.http.get<Contrat[]>(apiUrl + "contrats", httpOptions);
  }
  getContratsByIdClient(idClient: number) {
    return this.http.get<Contrat[]>(apiUrl + "contrats/client/" + idClient, httpOptions);
  }
  getContratsByIdTypeFacturation(idTypeFacturation: number) {
    return this.http.get<Contrat[]>(apiUrl + "contrats/typeFacturation/" + idTypeFacturation, httpOptions);
  }
  getContratsByIdTypeActivite(idTypeActivite: number) {
    return this.http.get<Contrat[]>(apiUrl + "contrats/typeActivite/" + idTypeActivite, httpOptions);
  }
  getContrat(id: number) {
    return this.http.get<Contrat>(apiUrl + "contrats/" + id, httpOptions);
  }

  createContrat(contrat: Contrat) {
    return this.http.post<Contrat>(apiUrl + "contrats", contrat, httpOptions);
  }

  updateContrat(contrat: Contrat) {
    return this.http.put(apiUrl + "contrats/" + contrat.idContrat, contrat, httpOptions);
  }

  deleteContrat(id: number) {
    return this.http.delete(apiUrl + "contrats/" + id, httpOptions);
  }
}

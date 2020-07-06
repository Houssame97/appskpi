import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RessourceCertification } from 'src/app/models/ressource-certification/ressource-certification';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RessourceCertificationService {

  constructor(private http: HttpClient) { }
  getRessourceCertifications(){
    return this.http.get<RessourceCertification[]>(apiUrl + "ressource_certifications", httpOptions);
  }

  getRessourceCertification(id: number){
    return this.http.get<RessourceCertification>(apiUrl + "ressource_certifications/" + id, httpOptions);
  }

  getCertifiedByIdCertification(idCertification: number){
    return this.http.get<RessourceCertification[]>(apiUrl + "ressource_certifications/certified/" + idCertification, httpOptions);
  }

  getCertificationByIdRessource(idRessource: number){
    return this.http.get<RessourceCertification[]>(apiUrl + "ressource_certifications/certifications/" + idRessource, httpOptions);
  }

  createRessourceCertification(ressourceCertification: RessourceCertification){
    return this.http.post<RessourceCertification>(apiUrl + "ressource_certifications", ressourceCertification, httpOptions);
  }

  updateRessourceCertification(ressourceCertification: RessourceCertification){
    return this.http.put(apiUrl + "ressource_certifications/" + ressourceCertification.idRessource_Certification, ressourceCertification, httpOptions);
  }

  deleteRessourceCertification(id: number){
    return this.http.delete(apiUrl + "ressource_certifications/" + id, httpOptions);
  }
}

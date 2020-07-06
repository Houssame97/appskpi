import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Certification } from 'src/app/models/certification/certification';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }
  getCertifications(){
    return this.http.get<Certification[]>(apiUrl + "certifications", httpOptions);
  }

  getCertification(id: number){
    return this.http.get<Certification>(apiUrl + "certifications/" + id, httpOptions);
  }

  createCertification(certification: Certification){
    return this.http.post<Certification>(apiUrl + "certifications", certification, httpOptions);
  }

  updateCertification(certification: Certification){
    return this.http.put(apiUrl + "certifications/" + certification.idCertification, certification, httpOptions);
  }

  deleteCertification(id: number){
    return this.http.delete(apiUrl + "certifications/" + id, httpOptions);
  }
}

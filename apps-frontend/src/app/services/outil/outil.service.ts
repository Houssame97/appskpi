import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Outil } from 'src/app/models/outil/outil';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class OutilService {

  constructor(private http: HttpClient) { }

  getOutils(){
    return this.http.get<Outil[]>(apiUrl + "outils", httpOptions);
  }
  getOutil(id: number){
    return this.http.get<Outil>(apiUrl + "outils/" + id, httpOptions);
  }

  createOutil(outil: Outil){
    return this.http.post<Outil>(apiUrl + "outils", outil, httpOptions);
  }

  updateOutil(outil: Outil){
    return this.http.put(apiUrl + "outils/" + outil.idOutil, outil, httpOptions);
  }

  deleteOutil(id: number){
    return this.http.delete(apiUrl + "outils/" + id, httpOptions);
  }}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Capabilite } from 'src/app/models/capabilite/capabilite';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CapabiliteService {

  constructor(private http: HttpClient) { }
  getCapabilites(){
    return this.http.get<Capabilite[]>(apiUrl + "capabilites", httpOptions);
  }

  getCapabilite(id: number){
    return this.http.get<Capabilite>(apiUrl + "capabilites/" + id, httpOptions);
  }

  createCapabilite(capabilite: Capabilite){
    return this.http.post<Capabilite>(apiUrl + "capabilites", capabilite, httpOptions);
  }

  updateCapabilite(capabilite: Capabilite){
    return this.http.put(apiUrl + "capabilites/" + capabilite.idCapabilite, capabilite, httpOptions);
  }

  deleteCapabilite(id: number){
    return this.http.delete(apiUrl + "capabilites/" + id, httpOptions);
  }}

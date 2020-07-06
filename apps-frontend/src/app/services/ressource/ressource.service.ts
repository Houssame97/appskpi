import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ressource } from 'src/app/models/ressource/ressource.model';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http: HttpClient) { }

  getRessources(){
    return this.http.get<Ressource[]>(apiUrl + "ressources", httpOptions);
  }
  getRessourcesByIdPoste(idPoste: number){
    return this.http.get<Ressource[]>(apiUrl + "ressources/poste/" + idPoste, httpOptions);
  }
  getRessource(id: number){
    return this.http.get<Ressource>(apiUrl + "ressources/" + id, httpOptions);
  }

  createRessource(ressource: Ressource){
    return this.http.post<Ressource>(apiUrl + "ressources", ressource, httpOptions);
  }

  updateRessource(ressource: Ressource){
    return this.http.put(apiUrl + "ressources/" + ressource.idRessource, ressource, httpOptions);
  }

  deleteRessource(id: number){
    return this.http.delete(apiUrl + "ressources/" + id, httpOptions);
  }
}

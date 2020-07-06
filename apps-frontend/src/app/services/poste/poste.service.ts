import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Poste } from 'src/app/models/poste/poste';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PosteService {

  constructor(private http: HttpClient) { }

  getPostes(){
    return this.http.get<Poste[]>(apiUrl + "postes", httpOptions);
  }

  getPoste(id: number){
    return this.http.get<Poste>(apiUrl + "postes/" + id, httpOptions);
  }

  createPoste(poste: Poste){
    return this.http.post<Poste>(apiUrl + "postes", poste, httpOptions);
  }

  updatePoste(poste: Poste){
    return this.http.put(apiUrl + "postes/" + poste.idPoste, poste, httpOptions);
  }

  deletePoste(id: number){
    return this.http.delete(apiUrl + "postes/" + id, httpOptions);
  }
}

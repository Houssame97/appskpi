import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Technologie } from 'src/app/models/technologie/technologie';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

  constructor(private http: HttpClient) { }

  getTechnologies(){
    return this.http.get<Technologie[]>(apiUrl + "technologies", httpOptions);
  }
  getTechnologie(id: number){
    return this.http.get<Technologie>(apiUrl + "technologies/" + id, httpOptions);
  }

  createTechnologie(technologie: Technologie){
    return this.http.post<Technologie>(apiUrl + "technologies", technologie, httpOptions);
  }

  updateTechnologie(technologie: Technologie){
    return this.http.put(apiUrl + "technologies/" + technologie.idTechnologie, technologie, httpOptions);
  }

  deleteTechnologie(id: number){
    return this.http.delete(apiUrl + "technologies/" + id, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeActivite } from 'src/app/models/typeActivite/type-activite';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TypeActiviteService {

  constructor(private http: HttpClient) { }

  getTypesActivites(){
    return this.http.get<TypeActivite[]>(apiUrl + "typesactivites", httpOptions);
  }

  getTypeActivite(id: number){
    return this.http.get<TypeActivite>(apiUrl + "typesactivites/" + id, httpOptions);
  }

  createTypeActivite(typeActivite: TypeActivite){
    return this.http.post<TypeActivite>(apiUrl + "typesactivites", typeActivite, httpOptions);
  }

  updateTypeActivite(typeActivite: TypeActivite){
    return this.http.put(apiUrl + "typesactivites/" + typeActivite.idTypeActivite, typeActivite, httpOptions);
  }

  deleteTypeActivite(id: number){
    return this.http.delete(apiUrl + "typesactivites/" + id, httpOptions);
  }
}

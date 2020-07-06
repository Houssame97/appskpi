import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TypeFacturation } from 'src/app/models/typeFacturation/type-facturation';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TypeFacturationService {

  constructor(private http: HttpClient) { }

  getTypesFacturations(){
    return this.http.get<TypeFacturation[]>(apiUrl + "typesfacturations", httpOptions);
  }

  getTypeFacturation(id: number){
    return this.http.get<TypeFacturation>(apiUrl + "typesfacturations/" + id, httpOptions);
  }

  createTypeFacturation(typeFacturation: TypeFacturation){
    return this.http.post<TypeFacturation>(apiUrl + "typesfacturations", typeFacturation, httpOptions);
  }

  updateTypeFacturation(typeFacturation: TypeFacturation){
    return this.http.put(apiUrl + "typesfacturations/" + typeFacturation.idTypeFacturation, TypeFacturation, httpOptions);
  }

  deleteTypeFacturation(id: number){
    return this.http.delete(apiUrl + "typesfacturations/" + id, httpOptions);
  }
}

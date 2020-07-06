import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Industrie } from 'src/app/models/industrie/industrie';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IndustrieService {

  constructor(private http: HttpClient) { }

  getIndustries(){
    return this.http.get<Industrie[]>(apiUrl + "industries", httpOptions);
  }

  getIndustrie(id: number){
    return this.http.get<Industrie>(apiUrl + "industries/" + id, httpOptions);
  }

  createIndustrie(industrie: Industrie){
    return this.http.post<Industrie>(apiUrl + "industries", industrie, httpOptions);
  }

  updateIndustrie(industrie: Industrie){
    return this.http.put(apiUrl + "industries/" + industrie.idIndustrie, industrie, httpOptions);
  }

  deleteIndustrie(id: number){
    return this.http.delete(apiUrl + "industries/" + id, httpOptions);
  }
}

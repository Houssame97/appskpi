import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Client } from 'src/app/models/client/client.model';

const apiUrl = environment.endpoint;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get<Client[]>(apiUrl + "clients", httpOptions);
  }
  getClientsByIdIndustrie(idIndustrie: number){
    return this.http.get<Client[]>(apiUrl + "clients/industrie/" + idIndustrie, httpOptions);
  }
  getClient(id: number){
    return this.http.get<Client>(apiUrl + "clients/" + id, httpOptions);
  }

  createClient(client: Client){
    return this.http.post<Client>(apiUrl + "clients", client, httpOptions);
  }

  updateClient(client: Client){
    return this.http.put(apiUrl + "clients/" + client.idClient, client, httpOptions);
  }

  deleteClient(id: number){
    return this.http.delete(apiUrl + "clients/" + id, httpOptions);
  }
}

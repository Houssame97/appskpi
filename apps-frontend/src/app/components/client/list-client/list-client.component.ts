import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client/client.service';
import { Client } from 'src/app/models/client/client.model';
import {FilterUtils} from 'primeng/utils';
import {  ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IndustrieService } from 'src/app/services/industrie/industrie.service';
import { Industrie } from 'src/app/models/industrie/industrie';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  clients: Client[];
  idIndustrie: number;
  filteredClients: Client[];
  exportColumns: any[];
  selectedClients: any[];
  selectedClient: Client = new Client();
  cols: any[];
  displayPosition: boolean;
  position: string ;
  displayAddingPosition: boolean;
  industries: Industrie[];
  idNewClientIndustrie: any;
  newClient: Client = new Client();
  isEdditing: boolean = false;
  invalidIdClient: boolean = false;
  totalRecords = 0;
  AddingForm = new FormGroup({
    nomClient : new FormControl('', [Validators.required]),
    industrie : new FormControl('', [Validators.required]),
  });
  constructor(private clientService: ClientService,
              public activateRoute: ActivatedRoute, private industrieService: IndustrieService) {
    this.idIndustrie = activateRoute.snapshot.params.idIndustrie;
  }

  ngOnInit() {
    if (this.idIndustrie) {
      this.getClientsByIdIndustrie();
    } else {
      this.getClients();
    }
    this.cols = [
      {header: "Nom", field: "nomClient"},
      {header: "Industrie", field: "industrie.nomIndustrie"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  getClients() {
    return this.clientService.getClients().subscribe(
      res => {
        this.clients = res;
        this.totalRecords = this.industries.length;
      },
      err => console.log(err)
    );
  }
  getClientsByIdIndustrie() {
    return this.clientService.getClientsByIdIndustrie(this.idIndustrie).subscribe(
      res => {
        this.clients = res;
        this.totalRecords = this.industries.length;
      },
      err => console.log(err)
    );
  }
  filterWithContains(event) {
    this.filteredClients = FilterUtils.filter(this.clients, ['value'], event.query, "contains");
  }
  showDetailsDialogPosition(rowData) {
    this.selectedClient = rowData;
    this.position = "topright";
    this.displayPosition = true;
  }
  showAddingDialogPosition(client?: Client) {
    if (client) {
      this.newClient = client;
      this.idNewClientIndustrie = client.industrie.idIndustrie;
      this.isEdditing = true;
      console.log(this.newClient);
    }
    this.getIndustries();
    this.displayAddingPosition = true;
  }
  getIndustries() {
    return this.industrieService.getIndustries().subscribe(
      res => {
        this.industries = res;
      },
      err => console.log(err)
    );
  }

  onSubmitAdding() {
      // tslint:disable-next-line: triple-equals
      this.newClient.industrie = this.industries.find(p => p.idIndustrie == this.idNewClientIndustrie);
      console.log(this.newClient);
      if (this.isEdditing) {
        this.updateClient();
      }
  }
  addClient() {
    return this.clientService.createClient(this.newClient).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  updateClient() {
    return this.clientService.updateClient(this.newClient).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  resetData() {
    this.getClients();
    this.displayAddingPosition = false;
    this.newClient = new Client();
    this.idNewClientIndustrie = null;
    this.isEdditing = false;
    this.AddingForm.reset();
  }
}

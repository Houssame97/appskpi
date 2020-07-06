import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat/contrat.service';
import { Contrat } from 'src/app/models/contrat/contrat.model';
import {FilterUtils} from 'primeng/utils';
import {  ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client/client.service';
import { Client } from 'src/app/models/client/client.model';
import { TypeFacturationService } from 'src/app/services/typeFacturation/type-facturation.service';
import { TypeFacturation } from 'src/app/models/typeFacturation/type-facturation';
import { TypeActiviteService } from 'src/app/services/typeActivite/type-activite.service';
import { TypeActivite } from 'src/app/models/typeActivite/type-activite';

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css'],
})
export class ListContratComponent implements OnInit {
  contrats: Contrat[];
  idClient: number;
  idTypeFacturation: number;
  idTypeActivite: number;
  filteredContrats: Contrat[];
  exportColumns: any[];
  selectedContrats: any[];
  selectedContrat: Contrat = new Contrat();
  cols: any[];
  displayPosition: boolean;
  position: string ;
  displayAddingPosition: boolean;
  clients: Client[];
  typesFacturations: TypeFacturation[];
  typesActivites: TypeActivite[];
  idNewContratClient: any;
  idNewContratTypeFacturation: any;
  idNewContratTypeActivite: any;
  newContrat: Contrat = new Contrat();
  isEdditing: boolean = false;
  invalidIdContrat: boolean = false;
  totalRecords = 0;

  AddingForm = new FormGroup({
    descriptionContrat : new FormControl('', [Validators.required]),
    client : new FormControl('', [Validators.required]),
    typeFacturation : new FormControl('', [Validators.required]),
    typeActivite : new FormControl('', [Validators.required]),
  });
  constructor(private contratService: ContratService,
              public activateRoute: ActivatedRoute, private clientService: ClientService, private typeFacturationService: TypeFacturationService, private typeActiviteService: TypeActiviteService) {
    this.idClient = activateRoute.snapshot.params.idClient;
    this.idTypeFacturation = activateRoute.snapshot.params.idTypeFacturation;
    this.idTypeActivite = activateRoute.snapshot.params.idTypeActivite;
  }

  ngOnInit() {
    if (this.idClient) {
      this.getContratsByIdClient();
    }
    else if (this.idTypeFacturation){
      this.getContratsByIdTypeFacturation();
    }
    else if (this.idTypeActivite){
      this.getContratsByIdTypeActivite();
    }
    else {
      this.getContrats();
    }
    this.cols = [
      {header: "Description", field: "descriptionContrat"},
      {header: "Client", field: "client.nomClient"},
      {header: "TypeFacturation", field: "typeFacturation.nomFacturation"},
      {header: "TypeActivite", field: "typeActivite.nomActivite"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  getContrats() {
    return this.contratService.getContrats().subscribe(
      res => {
        console.log(res);
        this.contrats = res;
      },
      err => console.log(err)
    );
  }
  getContratsByIdClient() {
    return this.contratService.getContratsByIdClient(this.idClient).subscribe(
      res => {
        this.contrats = res;
        this.totalRecords = this.contrats.length;
      },
      err => console.log(err)
    );
  }
  getContratsByIdTypeFacturation() {
    return this.contratService.getContratsByIdTypeFacturation(this.idTypeFacturation).subscribe(
      res => {
        this.contrats = res;
        this.totalRecords = this.contrats.length;

      },
      err => console.log(err)
    );
  }
  getContratsByIdTypeActivite() {
    return this.contratService.getContratsByIdTypeActivite(this.idTypeActivite).subscribe(
      res => {
        this.contrats = res;
      },
      err => console.log(err)
    );
  }
  filterWithContains(event) {
    this.filteredContrats = FilterUtils.filter(this.contrats, ['value'], event.query, "contains");
  }
  showDetailsDialogPosition(rowData) {
    this.selectedContrat = rowData;
    this.position = "topright";
    this.displayPosition = true;
  }
  showAddingDialogPosition(contrat?: Contrat) {
    if (contrat) {
      this.newContrat = contrat;
      this.idNewContratClient = contrat.client.idClient;
      this.idNewContratTypeFacturation = contrat.typeFacturation.idTypeFacturation;
      this.idNewContratTypeActivite = contrat.typeActivite.idTypeActivite;
      this.isEdditing = true;
      console.log(this.newContrat);
    }
    this.getClients();
    this.getTypesFacturations();
    this.getTypesActivites();
    this.displayAddingPosition = true;
  }
  getClients() {
    return this.clientService.getClients().subscribe(
      res => {
        this.clients = res;
      },
      err => console.log(err)
    );
  }
  getTypesFacturations() {
    return this.typeFacturationService.getTypesFacturations().subscribe(
      res => {
        this.typesFacturations = res;
      },
      err => console.log(err)
    );
  }
  getTypesActivites() {
    return this.typeActiviteService.getTypesActivites().subscribe(
      res => {
        this.typesActivites = res;
      },
      err => console.log(err)
    );
  }

  onSubmitAdding() {
      this.newContrat.client = this.clients.find(c => c.idClient == this.idNewContratClient);
      this.newContrat.typeFacturation = this.typesFacturations.find(tf => tf.idTypeFacturation == this.idNewContratTypeFacturation );
      this.newContrat.typeActivite = this.typesActivites.find(ta => ta.idTypeActivite == this.idNewContratTypeActivite);
      console.log(this.newContrat);
      if(this.isEdditing){
        this.updateContrat();
      }
  }
  addContrat() {
    return this.contratService.createContrat(this.newContrat).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  updateContrat(){
    return this.contratService.updateContrat(this.newContrat).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  resetData() {
    this.getContrats();
    this.displayAddingPosition = false;
    this.newContrat = new Contrat();
    this.idNewContratClient = null;
    this.idNewContratTypeFacturation = null;
    this.idNewContratTypeActivite = null;
    this.isEdditing = false;
    this.AddingForm.reset();
  }
}

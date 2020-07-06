import { Component, OnInit } from '@angular/core';
import {FilterUtils} from 'primeng/utils';
import {  ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CapabiliteService } from 'src/app/services/capabilite/capabilite.service';
import { Capabilite } from 'src/app/models/capabilite/capabilite';

@Component({
  selector: 'app-list-capabilite',
  templateUrl: './list-capabilite.component.html',
  styleUrls: ['./list-capabilite.component.css']
})
export class ListCapabiliteComponent implements OnInit {
  capabilites: Capabilite[];
  filteredCapabilites: Capabilite[];
  exportColumns: any[];
  selectedCapabilites: any[];
  selectedCapabilite: Capabilite = new Capabilite();
  cols: any[];
  displayPosition: boolean;
  position: string ;
  displayAddingPosition: boolean;
  idNewRessourcePoste: any;
  newCapabilite: Capabilite = new Capabilite();
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    nomCapabilite : new FormControl('', [Validators.required]),
    descriptionCapabilite : new FormControl('', [Validators.required]),
  });
  constructor(private capabiliteService: CapabiliteService,
              public activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCapabilites();
    this.cols = [
      {header: "Nom", field: "nomCapabilite"},
      {header: "Description", field: "descriptionCapabilite"},
      {header: "Dernière modification", field: "audit.updatedOn"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  getCapabilites() {
    return this.capabiliteService.getCapabilites().subscribe(
      res => {
        this.capabilites = res;
        this.totalRecords = this.capabilites.length;

      },
      err => console.log(err)
    );
  }
  filterWithContains(event) {
    this.filteredCapabilites = FilterUtils.filter(this.capabilites, ['value'], event.query, "contains");
  }
  showDetailsDialogPosition(rowData) {
    this.selectedCapabilite = rowData;
    this.position = "topright";
    this.displayPosition = true;
  }
  /*showAddingDialogPosition(capabilite?: Capabilite) {
    if (ressource) {
      this.newRessource = ressource;
      this.idNewRessourcePoste = ressource.poste.idPoste;
      this.isEdditing = true;
      console.log(this.newRessource);
    }
    this.getPostes();
    this.displayAddingPosition = true;
  }

  onSubmitAdding() {
      this.newRessource.poste = this.postes.find(p => p.idPoste == this.idNewRessourcePoste);
      console.log(this.newRessource);
      if(this.isEdditing){
        this.updateRessource();
      } else {
        if (this.isMatriculeValid()) { this.invalidMatricule = true; } else { this.invalidMatricule = false; }
        if (this.isEmailValid()) { this.invalidEmail = true; } else { this.invalidEmail = false; }
        if (!this.invalidEmail && !this.invalidMatricule) {
            this.addRessource();
        }
    }
  }*/
  addCapabilite() {
    return this.capabiliteService.createCapabilite(this.newCapabilite).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  updateCapabilite(){
    return this.capabiliteService.updateCapabilite(this.newCapabilite).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  isNomValid() {
    return this.capabilites.find( c => c.nomCapabilite === this.newCapabilite.nomCapabilite) != null;
  }
  resetData() {
    this.getCapabilites();
    this.displayAddingPosition = false;
    this.newCapabilite = new Capabilite();
    this.idNewRessourcePoste = null;
    // this.isEdditing = false;
    this.AddingForm.reset();
  }
}

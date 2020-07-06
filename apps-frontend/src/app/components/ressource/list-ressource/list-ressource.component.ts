import { Component, OnInit } from '@angular/core';
import { RessourceService } from 'src/app/services/ressource/ressource.service';
import { RessourceCertificationService } from 'src/app/services/ressource-certification/ressource-certification.service';
import { Ressource } from 'src/app/models/ressource/ressource.model';
import {FilterUtils} from 'primeng/utils';
import {  ActivatedRoute } from '@angular/router';
import { RessourceCertification } from 'src/app/models/ressource-certification/ressource-certification';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PosteService } from 'src/app/services/poste/poste.service';
import { Poste } from 'src/app/models/poste/poste';

@Component({
  selector: 'app-list-ressource',
  templateUrl: './list-ressource.component.html',
  styleUrls: ['./list-ressource.component.css'],
})
export class ListRessourceComponent implements OnInit {
  ressources: Ressource[];
  idPoste: number;
  filteredRessources: Ressource[];
  exportColumns: any[];
  selectedRessources: any[];
  selectedRessource: Ressource = new Ressource();
  cols: any[];
  displayPosition: boolean;
  position: string ;
  displayAddingPosition: boolean;
  certifications: RessourceCertification[];
  postes: Poste[];
  idNewRessourcePoste: any;
  newRessource: Ressource = new Ressource();
  invalidMatricule: boolean = false;
  invalidEmail: boolean = false;
  isEdditing: boolean = false;
  totalRecords: number = 0;
  rate_background_color = ["danger", "secondary", "info", "primary", "success"];
  AddingForm = new FormGroup({
    nomRessource : new FormControl('', [Validators.required]),
    prenomRessource : new FormControl('', [Validators.required]),
    matricule : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    adresse : new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    telephone : new FormControl('', [Validators.required, Validators.max(999999999099), Validators.min(99999999)]),
    rate : new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
    poste : new FormControl('', [Validators.required]),
    nbr_annee_global : new FormControl('', [Validators.required, Validators.min(0)]),
    nbr_annee_dxc : new FormControl('', [Validators.required, Validators.min(0)]),
    niveau_superiorite : new FormControl('', [Validators.required]), // a corriger
  });
  constructor(private ressourceService: RessourceService, private ressourceCertificationService: RessourceCertificationService,
              public activateRoute: ActivatedRoute, private posteService: PosteService) {
    this.idPoste = activateRoute.snapshot.params.idPoste;
  }

  getColor(rate){
    return "alert alert-" + this.rate_background_color[rate];
  }
  ngOnInit() {
    if (this.idPoste) {
      this.getRessourcesByIdPoste();
    } else {
      this.getRessources();
    }
    this.cols = [
      {header: "Nom", field: "nomRessource"},
      {header: "Prenom", field: "prenomRessource"},
      {header: "Matricule", field: "matricule"},
      {header: "Email", field: "email"},
      {header: "Telephone", field: "telephone"},
      {header: "Adresse", field: "adresse"},
      {header: "Rate", field: "rate"},
      {header: "Poste", field: "poste.nomPoste"},
      {header: "Dernière modification", field: "audit.updatedOn"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  getRessources() {
    return this.ressourceService.getRessources().subscribe(
      res => {
        console.log(res);
        this.ressources = res;
      },
      err => console.log(err)
    );
  }
  getRessourcesByIdPoste() {
    return this.ressourceService.getRessourcesByIdPoste(this.idPoste).subscribe(
      res => {
        this.ressources = res;
      },
      err => console.log(err)
    );
  }
  filterWithContains(event) {
    this.filteredRessources = FilterUtils.filter(this.ressources, ['value'], event.query, "contains");
  }
  showDetailsDialogPosition(rowData) {
    this.selectedRessource = rowData;
    this.position = "topright";
    this.displayPosition = true;
    this.getCertifications();
  }
  showAddingDialogPosition(ressource?: Ressource) {
    if (ressource) {
      this.newRessource = ressource;
      this.idNewRessourcePoste = ressource.poste.idPoste;
      this.isEdditing = true;
      console.log(this.newRessource);
    }
    this.getPostes();
    this.displayAddingPosition = true;
  }
  getPostes() {
    return this.posteService.getPostes().subscribe(
      res => {
        this.postes = res;
      },
      err => console.log(err)
    );
  }
  getCertifications() {
    return this.ressourceCertificationService.getCertificationByIdRessource(this.selectedRessource.idRessource).subscribe(
      res => {
        this.certifications = res;
      },
      err => console.log(err)
    );
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
  }
  addRessource() {
    return this.ressourceService.createRessource(this.newRessource).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  updateRessource(){
    return this.ressourceService.updateRessource(this.newRessource).subscribe(
      res => {
        this.resetData();
      },
      err => console.log(err)
    );
  }
  isMatriculeValid() {
    return this.ressources.find( r => r.matricule == this.newRessource.matricule) != null;
  }
  isEmailValid() {
    return this.ressources.find( r => r.email == this.newRessource.email) != null;
  }
  resetData() {
    this.getRessources();
    this.displayAddingPosition = false;
    this.invalidMatricule = false;
    this.invalidEmail = false;
    this.newRessource = new Ressource();
    this.idNewRessourcePoste = null;
    this.isEdditing = false;
    this.AddingForm.reset();
  }
}

import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RessourceCertification } from 'src/app/models/ressource-certification/ressource-certification';
import { RessourceCertificationService } from 'src/app/services/ressource-certification/ressource-certification.service';
import { ActivatedRoute } from '@angular/router';
import { RessourceService } from 'src/app/services/ressource/ressource.service';
import { Ressource } from 'src/app/models/ressource/ressource.model';
import { Certification } from 'src/app/models/certification/certification';
import { CertificationService } from 'src/app/services/certification/certification.service';

@Component({
  selector: 'app-list-ressource-certification',
  templateUrl: './list-ressource-certification.component.html',
  styleUrls: ['./list-ressource-certification.component.css']
})
export class ListRessourceCertificationComponent implements OnInit {
  idCertification: number;
  certification: Certification;
  certified: RessourceCertification[];
  filteredCertificated: RessourceCertification[];
  exportColumns: any[];
  selectedCertified: any[];
  newCertified: RessourceCertification = new RessourceCertification();
  ressources: Ressource[];
  idRessourceCertified: number;
  cols: any[];
  annee_obtention: any;
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    ressource : new FormControl('', [Validators.required]),
    lieu_obtention : new FormControl('', [Validators.required]),
    annee_obtention : new FormControl('', [Validators.required]),
    niveau_de_maitrise : new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
  });

  constructor(private ressourceCertificationService: RessourceCertificationService, private messageService: MessageService,
              public activateRoute: ActivatedRoute, private ressourceService: RessourceService, private certificationService: CertificationService){
      this.idCertification = activateRoute.snapshot.params['idCertification'];
  }

  ngOnInit() {
    this.getCertified();
    this.cols = [
      {header: "Ressource certifié", field: "ressource.nomRessource"},
      {header: "Niveau de maîtrise", field: "niveau_de_maitrise"},
      {header: "Année d'obtention", field: "annee_obtention"},
      {header: "Année d'obtention", field: "obtenue_a_dxc"},
      {header: "Dernière modification", field: "audit.updatedOn"},
     //  {header: "Niveau de maîtrise", field: "nieau_de_maitrise"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
    this.getCertification();
  }
  getCertified(){
    return this.ressourceCertificationService.getCertifiedByIdCertification(this.idCertification).subscribe(
      res => {
        this.certified = res;
        this.totalRecords = this.certified.length;
      },
      err => console.log(err)
    );
  }
  onEditSave(certified: RessourceCertification){
     /*if(certified.intitule === "" || certified.editeur === ""){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        */
        this.ressourceCertificationService.updateRessourceCertification(certified).subscribe(
          res => {
            this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          },
          err => {
            console.log(err);
            this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
          }
        );
      }
  onSubmitAdding(){
    this.newCertified.certification = this.certification;
    this.newCertified.ressource = this.ressources.find( r => r.idRessource == this.idRessourceCertified);
    this.ressourceCertificationService.createRessourceCertification(this.newCertified).subscribe(
      res => {
        this.AddingForm.reset();
        this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
        this.getCertified();
      },
      err => {
        console.log(err);
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
      }
    );
  }
  onAdding(){
    this.getRessources();
  }
  getRessources(){
    return this.ressourceService.getRessources().subscribe(
      res => {
        this.ressources = res;
      },
      err => console.log(err)
    );
  }
  getCertification(){
    return this.certificationService.getCertification(this.idCertification).subscribe(
      res => {
        this.certification = res;
      },
      err => console.log(err)
    );
  }
}

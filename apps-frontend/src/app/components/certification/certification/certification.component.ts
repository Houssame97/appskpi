import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CertificationService } from 'src/app/services/certification/certification.service';
import { Certification } from 'src/app/models/certification/certification';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certifications: Certification[];
  filteredCertifications: Certification[];
  exportColumns: any[];
  selectedCertifications: any[];
  newCertification: Certification = new Certification();
  cols: any[];
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    intitule : new FormControl('', [Validators.required, Validators.minLength(3)]),
    editeur : new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(private certificationService: CertificationService, private messageService: MessageService) { }


  ngOnInit() {
    this.getCertifications();
    this.cols = [
      {header: "Intitulé", field: "intitule"},
      {header: "Editeur", field: "editeur"},
      {header: "Dernière modification", field: "audit.updatedOn"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  getCertifications(){
    return this.certificationService.getCertifications().subscribe(
      res => {
        this.certifications = res;
        this.totalRecords = this.certifications.length;
      },
      err => console.log(err)
    );
  }
  onEditSave(certification: Certification){
      if(certification.intitule === "" || certification.editeur === ""){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.certificationService.updateCertification(certification).subscribe(
          res => {
            this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          },
          err => {
            console.log(err);
            this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
          }
        );
      }
    }
  onSubmitAdding(){
    this.certificationService.createCertification(this.newCertification).subscribe(
      res => {
        this.AddingForm.reset();
        this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
        this.getCertifications();
      },
      err => {
        console.log(err);
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
      }
    );
  }

}

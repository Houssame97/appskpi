import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { OutilService } from 'src/app/services/outil/outil.service';
import { Outil } from 'src/app/models/outil/outil';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-list-outil',
  templateUrl: './list-outil.component.html',
  styleUrls: ['./list-outil.component.css']
})
export class ListOutilComponent implements OnInit {
  outils: Outil[];
  filteredOutils: Outil[];
  exportColumns: any[];
  selectedOutils: any[];
  selectedOutil: Outil = new Outil();
  newOutil: Outil = new Outil();
  invalidNomOutil: boolean = false;
  role: string;
  cols: any[];
  totalRecords: number;
  AddingForm = new FormGroup({
    nomOutil : new FormControl('', [Validators.required]),
    categorie : new FormControl('', [Validators.required]),
  });
  constructor(private outilService: OutilService, private messageService: MessageService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.getRole();
    this.getOutils();
    this.cols = [
      {header: "Nom de l'outil", field: "nomOutil"},
      {header: "Catégorie", field: "categorie"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  getOutils(){
    return this.outilService.getOutils().subscribe(
      res => {
        this.outils = res;
        this.totalRecords = this.outils.length;
      },
      err => console.log(err)
    );
  }
  onEditSave(outils: Outil){
      if(outils.nomOutil === "" || outils.categorie === ""){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.outilService.updateOutil(outils).subscribe(
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
    if(this.outils.find(outil => outil.nomOutil == this.newOutil.nomOutil)){
      this.invalidNomOutil = true;
    } else{
      this.outilService.createOutil(this.newOutil).subscribe(
        res => {
          this.invalidNomOutil = false;
          this.AddingForm.reset();
          this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          this.getOutils();
        },
        err => {
          console.log(err);
          this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
        }
      );
    }
  }
  getRole() {
    this.role = this.loginService.getRole();
  }

}

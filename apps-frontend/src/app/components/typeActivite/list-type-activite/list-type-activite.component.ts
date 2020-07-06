import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TypeActiviteService } from 'src/app/services/typeActivite/type-activite.service';
import { TypeActivite } from 'src/app/models/typeActivite/type-activite';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-list-type-activite',
  templateUrl: './list-type-activite.component.html',
  styleUrls: ['./list-type-activite.component.css']
})
export class ListTypeActiviteComponent implements OnInit {

  typesActivites: TypeActivite[];
  filteredActivites: TypeActivite[];
  exportColumns: any[];
  selectedActivites: any[];
  selectedActivite: TypeActivite = new TypeActivite();
  newTypeActivite: TypeActivite = new TypeActivite();
  invalidTypeActivite: boolean = false;
  role: string;
  cols: any[];
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    nomTypeActivite : new FormControl('', [Validators.required]),
  });
  constructor(private typeActiviteService: TypeActiviteService, private messageService: MessageService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.getRole();
    this.getTypesActivites();
    this.cols = [
      {header: "Type de l'activité", field: "nomTypeActivite"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  getTypesActivites(){
    return this.typeActiviteService.getTypesActivites().subscribe(
      res => {
        this.typesActivites = res;
        this.totalRecords = this.typesActivites.length;
      },
      err => console.log(err)
    );
  }
  onEditSave(typeActivite: TypeActivite){
      if(typeActivite.nomTypeActivite === "" ){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.typeActiviteService.updateTypeActivite(typeActivite).subscribe(
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
    if(this.typesActivites.find( activite => activite.nomTypeActivite == this.newTypeActivite.nomTypeActivite)){
      this.invalidTypeActivite = true;
    } else{
      this.typeActiviteService.createTypeActivite(this.newTypeActivite).subscribe(
        res => {
          this.invalidTypeActivite = false;
          this.AddingForm.reset();
          this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          this.getTypesActivites();
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

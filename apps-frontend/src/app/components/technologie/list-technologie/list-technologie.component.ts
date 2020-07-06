import { Component, OnInit } from '@angular/core';
import { TechnologieService } from 'src/app/services/technologie/technologie.service';
import { Technologie } from 'src/app/models/technologie/technologie';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-list-technologie',
  templateUrl: './list-technologie.component.html',
  styleUrls: ['./list-technologie.component.css']
})
export class ListTechnologieComponent implements OnInit {
  technologies: Technologie[];
  filteredTechnologies: Technologie[];
  exportColumns: any[];
  selectedTechnologies: any[];
  selectedTechnologie: Technologie = new Technologie();
  newTechnologie: Technologie = new Technologie();
  invalidNomTechnologie: boolean = false;
  role: string;
  cols: any[];
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    nomTechnologie : new FormControl('', [Validators.required]),
  });
  constructor(private technologieService: TechnologieService, private messageService: MessageService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.getRole();
    this.getTechnologies();
    this.cols = [
      {header: "Nom de la technologie", field: "nomTechnologie"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  getTechnologies(){
    return this.technologieService.getTechnologies().subscribe(
      res => {
        this.technologies = res;
        this.totalRecords = this.technologies.length;
      },
      err => console.log(err)
    );
  }
  onEditSave(technologie: Technologie){
      if(technologie.nomTechnologie === "" ){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.technologieService.updateTechnologie(technologie).subscribe(
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
    if(this.technologies.find( technologie => technologie.nomTechnologie == this.newTechnologie.nomTechnologie)){
      this.invalidNomTechnologie = true;
    } else{
      this.technologieService.createTechnologie(this.newTechnologie).subscribe(
        res => {
          this.invalidNomTechnologie = false;
          this.AddingForm.reset();
          this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          this.getTechnologies();
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

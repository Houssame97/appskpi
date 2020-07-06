import { Component, OnInit } from '@angular/core';
import { PosteService } from 'src/app/services/poste/poste.service';
import { Poste } from 'src/app/models/poste/poste';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-poste',
  templateUrl: './list-poste.component.html',
  styleUrls: ['./list-poste.component.css']
})
export class ListPosteComponent implements OnInit {
  postes: Poste[];
  filteredPostes: Poste[];
  exportColumns: any[];
  selectedPostes: any[];
  selectedPoste: Poste = new Poste();
  newPoste: Poste = new Poste();
  invalidNomPoste : boolean = false;
  cols: any[];
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    nomPoste : new FormControl('', [Validators.required, Validators.minLength(3)]),
    descriptionPoste : new FormControl('', [Validators.required]),
  });

  constructor(private posteService: PosteService, private messageService: MessageService) {}

  ngOnInit() {
    this.getPosts();
    this.cols = [
      {header: "Nom", field: "nomPoste"},
      {header: "Description", field: "descriptionPoste"},
      // {header: "nbr employée ", field: "matricule"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
  getPosts(){
    return this.posteService.getPostes().subscribe(
      res => {
        console.log(res);
        this.postes = res;
      },
      err => console.log(err)
    );
  }
  onEditSave(poste: Poste){
      if(poste.nomPoste === "" || poste.descriptionPoste === ""){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.posteService.updatePoste(poste).subscribe(
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
    if(this.postes.find( poste => poste.nomPoste == this.newPoste.nomPoste)){
      this.invalidNomPoste = true;
    } else{
      this.posteService.createPoste(this.newPoste).subscribe(
        res => {
          this.invalidNomPoste = false;
          this.AddingForm.reset();
          this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          this.getPosts();
        },
        err => {
          console.log(err);
          this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
        }
      );
    }
  }
}

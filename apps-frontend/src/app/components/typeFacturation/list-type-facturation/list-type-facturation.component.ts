import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { TypeFacturationService } from 'src/app/services/typeFacturation/type-facturation.service';
import { TypeFacturation } from 'src/app/models/typeFacturation/type-facturation';

@Component({
  selector: 'app-list-type-facturation',
  templateUrl: './list-type-facturation.component.html',
  styleUrls: ['./list-type-facturation.component.css']
})
export class ListTypeFacturationComponent implements OnInit {

  typesFacturations: TypeFacturation[];
  filteredFacturations: TypeFacturation[];
  exportColumns: any[];
  selectedFacturations: any[];
  selectedFacturation: TypeFacturation = new TypeFacturation();
  newTypeFacturation: TypeFacturation = new TypeFacturation();
  invalidTypeFacturation: boolean = false;
  cols: any[];
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    nomTypeFacturation : new FormControl('', [Validators.required]),
  });
  constructor(private typeFacturationService: TypeFacturationService, private messageService: MessageService) { }

  ngOnInit() {
    this.getTypesFacturations();
    this.cols = [
      {header: "Type de l'facturation", field: "nomTypeFacturation"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  getTypesFacturations() {
    return this.typeFacturationService.getTypesFacturations().subscribe(
      res => {
        console.log(res);
        this.typesFacturations = res;
        this.totalRecords = this.typesFacturations.length;

      },
      err => console.log(err)
    );
  }
  onEditSave(typeFacturation: TypeFacturation) {
      if (typeFacturation.nomTypeFacturation === "" ) {
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.typeFacturationService.updateTypeFacturation(typeFacturation).subscribe(
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
  onSubmitAdding() {
    // tslint:disable-next-line: triple-equals
    if (this.typesFacturations.find( facturation => facturation.nomTypeFacturation == this.newTypeFacturation.nomTypeFacturation)) {
      this.invalidTypeFacturation = true;
    } else {
      this.typeFacturationService.createTypeFacturation(this.newTypeFacturation).subscribe(
        res => {
          this.invalidTypeFacturation = false;
          this.AddingForm.reset();
          this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          this.getTypesFacturations();
        },
        err => {
          console.log(err);
          this.messageService.add({severity: 'error', summary: 'Error', detail: "Une erreur s'est produite"});
        }
      );
    }
  }
}

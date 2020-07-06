import { Component, OnInit } from '@angular/core';
import { Industrie } from 'src/app/models/industrie/industrie';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IndustrieService } from 'src/app/services/industrie/industrie.service';
import {MessageService} from 'primeng/api';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Component({
  selector: 'app-list-industrie',
  templateUrl: './list-industrie.component.html',
  styleUrls: ['./list-industrie.component.css']
})
export class ListIndustrieComponent implements OnInit {

  industries: Industrie[];
  filteredIndustries: Industrie[];
  exportColumns: any[];
  selectedIndustries: any[];
  selectedIndustrie: Industrie = new Industrie();
  newIndustrie: Industrie = new Industrie();
  invalidTypeActivite: boolean = false;
  role: string;
  cols: any[];
  totalRecords: number = 0;
  AddingForm = new FormGroup({
    nomIndustrie : new FormControl('', [Validators.required]),
  });
  constructor(private industrieService: IndustrieService, private messageService: MessageService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.getRole();
    this.getIndustries();
    this.cols = [
      {header: "Nom de l'industrie", field: "nomIndustrie"},
    ];
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  getIndustries(){
    return this.industrieService.getIndustries().subscribe(
      res => {
        console.log(res);
        this.industries = res;
        this.totalRecords = this.industries.length;
      },
      err => console.log(err)
    );
  }
  onEditSave(industrie: Industrie){
      if(industrie.nomIndustrie === "" ){
        this.messageService.add({severity: 'error', summary: 'Error', detail: "Champ requis"});
      } else {
        this.industrieService.updateIndustrie(industrie).subscribe(
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
    if( this.industries.find( industrie => industrie.nomIndustrie == this.newIndustrie.nomIndustrie)){
      this.invalidTypeActivite = true;
      console.log("YES")
    } else{
      this.industrieService.createIndustrie(this.newIndustrie).subscribe(
        res => {
          this.invalidTypeActivite = false;
          this.AddingForm.reset();
          this.messageService.add({severity: 'success', summary: 'success', detail: 'Opération effectuée'});
          this.getIndustries();
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

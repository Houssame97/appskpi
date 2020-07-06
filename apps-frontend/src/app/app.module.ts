import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { XhrInterceptor } from '../app/services/authentication/interceptor/xhr-interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ListRessourceComponent } from './components/ressource/list-ressource/list-ressource.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPosteComponent } from './components/poste/list-poste/list-poste.component';
import { CertificationComponent } from './components/certification/certification/certification.component';
import { ListRessourceCertificationComponent } from './components/ressource-certification/list-ressource-certification/list-ressource-certification.component';
import { ListTechnologieComponent } from './components/technologie/list-technologie/list-technologie.component';
import { ListOutilComponent } from './components/outil/list-outil/list-outil.component';
import { ListIndustrieComponent } from './components/industrie/list-industrie/list-industrie.component';
import { ListTypeActiviteComponent } from './components/typeActivite/list-type-activite/list-type-activite.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { ListTypeFacturationComponent } from './components/typeFacturation/list-type-facturation/list-type-facturation.component';
import { ListContratComponent } from './components/contrat/list-contrat/list-contrat.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { AuthGuard } from './guards/authentication/auth.guard';
import { LoginGuard } from './guards/login/login.guard';
import { ListCapabiliteComponent } from './components/capabilite/list-capabilite/list-capabilite.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListRessourceComponent,
    ListPosteComponent,
    CertificationComponent,
    ListRessourceCertificationComponent,
    ListTechnologieComponent,
    ListOutilComponent,
    ListIndustrieComponent,
    ListTypeActiviteComponent,
    SidebarComponent,
    ListTypeFacturationComponent,
    ListClientComponent,
    ListContratComponent,
    ListCapabiliteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    TableModule,
    AutoCompleteModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ToastModule,
    PaginatorModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, MessageService,
     AuthGuard, LoginGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }

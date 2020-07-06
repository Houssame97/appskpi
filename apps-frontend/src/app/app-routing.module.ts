import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/authentication/login/login.component';
import { ListRessourceComponent } from './components/ressource/list-ressource/list-ressource.component';
import { ListPosteComponent } from './components/poste/list-poste/list-poste.component';
import { CertificationComponent } from './components/certification/certification/certification.component';
import { ListRessourceCertificationComponent } from './components/ressource-certification/list-ressource-certification/list-ressource-certification.component';
import { ListTechnologieComponent } from './components/technologie/list-technologie/list-technologie.component';
import { ListOutilComponent } from './components/outil/list-outil/list-outil.component';
import { ListIndustrieComponent } from './components/industrie/list-industrie/list-industrie.component';
import { ListTypeActiviteComponent } from './components/typeActivite/list-type-activite/list-type-activite.component';
import { ListTypeFacturationComponent } from './components/typeFacturation/list-type-facturation/list-type-facturation.component';
import { ListContratComponent } from './components/contrat/list-contrat/list-contrat.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { AuthGuard } from './guards/authentication/auth.guard';
import { LoginGuard } from './guards/login/login.guard';
import { ListCapabiliteComponent } from './components/capabilite/list-capabilite/list-capabilite.component';

const routes: Routes = [
  { path: '' , redirectTo: '/ressource', pathMatch: 'full'},
  { path: 'login',  component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'ressource',  component: ListRessourceComponent, canActivate: [AuthGuard],
    data: {roles: ['DL', 'CM', 'DSL']} },
  { path: 'poste/ressources/:idPoste',  component: ListRessourceComponent, canActivate: [AuthGuard],
    data: {roles: ['DL', 'CM', 'DSL']} },
  { path: 'poste',  component: ListPosteComponent, canActivate: [AuthGuard],
    data: {roles: ['DL', 'CM', 'DSL']} },
  { path: 'certification',  component: CertificationComponent, canActivate: [AuthGuard],
    data: {roles: ['DL', 'CM', 'DSL']} },
  { path: 'certification/certified/:idCertification',  component: ListRessourceCertificationComponent,
    canActivate: [AuthGuard], data: {roles: ['DL', 'CM', 'DSL']} },
  { path: 'technologie',  component: ListTechnologieComponent, canActivate: [AuthGuard],
    data: {roles: ['Architecte', 'DL', 'CM', 'DSL']} },
  { path: 'outil',  component: ListOutilComponent, canActivate: [AuthGuard],
    data: {roles: ['Architecte', 'DL', 'CM', 'DSL']} },
  { path: 'industrie',  component: ListIndustrieComponent, canActivate: [AuthGuard],
    data: {roles: ['Architecte', 'DL', 'CM', 'DSL']} },
  { path: 'activite',  component: ListTypeActiviteComponent, canActivate: [AuthGuard],
    data: {roles: ['Architecte', 'DL', 'CM', 'DSL']} },
  { path: 'facturation', component: ListTypeFacturationComponent, canActivate: [AuthGuard],
    data: {roles: ['DSL']} },
  { path: 'contrat', component: ListContratComponent, canActivate: [AuthGuard],
    data: {roles: ['DSL']} },
  { path: 'client', component: ListClientComponent, canActivate: [AuthGuard],
    data: {roles: ['DSL']} },
  { path: 'capabilite', component: ListCapabiliteComponent, canActivate: [AuthGuard],
    data: {roles: ['DSL']} },
  { path: '**', redirectTo: '/ressource', pathMatch: 'full'}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

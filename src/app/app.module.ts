import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { ProcessosComponent } from './processos/processos.component';
import { PapeisComponent } from './papeis/papeis.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { FamiliaComponent } from './familia/familia.component';
import { HomeComponent } from './home/home.component';
import { EstrategiasComponent } from './estrategias/estrategias.component';

const appRoutes: Routes = [
  {path:'estrategias',component: EstrategiasComponent},
  {path:'familia',component:FamiliaComponent},
  {path:'documentacoes',component: DocumentosComponent},
  {path:'papeis',component: PapeisComponent},
  {path:'processos',component: ProcessosComponent},
  {path:'ferramentas', component: FerramentasComponent},
  {path:'', component: HomeComponent},
  {path:'**',component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FerramentasComponent,
    ProcessosComponent,
    PapeisComponent,
    DocumentosComponent,
    FamiliaComponent,
    HomeComponent,
    EstrategiasComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} 
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

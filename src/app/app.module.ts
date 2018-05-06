import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { ProcessosComponent } from './processos/processos.component';
import { PapeisComponent } from './papeis/papeis.component';

const appRoutes: Routes = [
  {path:'papeis',component: PapeisComponent},
  {path:'processos',component: ProcessosComponent},
  {path:'ferramentas', component: FerramentasComponent},
  {path:'', component: AppComponent,}
];

@NgModule({
  declarations: [
    AppComponent,
    FerramentasComponent,
    ProcessosComponent,
    PapeisComponent
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

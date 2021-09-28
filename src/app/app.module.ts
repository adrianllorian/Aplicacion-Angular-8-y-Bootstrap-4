import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Header } from './components/header/header.component';
import { Inicio } from './components/inicio/inicio.component';
import { Footer } from './components/footer/footer.component';
import { Departamentos } from './components/departamentos/depart.component';
import { Profesores } from './components/Profesores/profesores.component';
import { Buscar } from './components/buscar/buscar.component';
import { Error404 } from './components/error404/error404.component';
import { Ciclos } from './components/ciclos/ciclos.component';
import { MiPipePipe } from './mi-pipe.pipe';

const appRoutes: Routes = [
  { path: 'DEPARTAMENTOS', component: Departamentos },
  { path: 'profesores', component: Profesores},
  { path: 'buscar', component: Buscar},
  { path: 'error404', component: Error404},
  { path: 'DEPARTAMENTOS/ciclosFP/:id', component: Ciclos},
  { path: '', component:Inicio, pathMatch:'full'},
  { path: '**', redirectTo:'error404', pathMatch:'full'}
   ]

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Inicio,
    Footer,
    Departamentos,
    Profesores,
    Buscar,
    Error404,
    Ciclos,
    MiPipePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

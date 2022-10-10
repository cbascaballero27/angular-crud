import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { EditarComponent } from './componentes/editar/editar.component';


const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'buscar',component: BuscarComponent},
  {path:'registrar',component: RegistrarComponent},
  {path:'editar/:id',component: EditarComponent},
  {path:'**',pathMatch: 'full',redirectTo:'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

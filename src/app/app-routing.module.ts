import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';  
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';  

const routes: Routes = [
{path: 'frmContacto', component: FormcontactoComponent},
{path: 'inicioSesion', component: InicioSesionComponent},
{path: 'quienesSomos', component: QuienesSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

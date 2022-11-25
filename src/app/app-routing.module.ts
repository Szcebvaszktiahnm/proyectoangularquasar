import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';  
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';  
import { Page404Component } from './page404/page404.component';
import { EmpleadosComponent} from './empleados/empleados.component';
import { EditarEmpleadosComponent } from './editar-empleados/editar-empleados.component';

const routes: Routes = [
{path: '',  redirectTo:'/inicioSesion', pathMatch: 'full' },
{path: 'frmContacto', component: FormcontactoComponent},
{path: 'inicioSesion', component: InicioSesionComponent},
{path: 'quienesSomos', component: QuienesSomosComponent},
{path: 'empleados', component: EmpleadosComponent},
{path: 'editar-empleados/:id', component: EditarEmpleadosComponent},
{path: '**', component: Page404Component },
{path: '',pathMatch:'full',redirectTo:'modificarempleados'},
{path: '',pathMatch:'full',redirectTo:'empleados'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

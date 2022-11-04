import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CentroComponent } from './centro/centro.component';

import { CargarScriptsService} from "./cargar-scripts.service";
import { SlidebarComponent } from './slidebar/slidebar.component';
import { InferiorComponent } from './inferior/inferior.component';
import { AcordionComponent } from './acordion/acordion.component';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { Page404Component } from './page404/page404.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CentroComponent,
    SlidebarComponent,
    InferiorComponent,
    AcordionComponent,
    FormcontactoComponent,
    QuienesSomosComponent,
    InicioSesionComponent,
    Page404Component,
    AdminComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

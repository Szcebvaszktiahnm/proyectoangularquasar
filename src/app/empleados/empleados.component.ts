import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudempleadosService } from '../servicios/crudempleados.service';  

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  Empleados:any;
  formularioempleado: FormGroup;



  constructor(
    public formulario: FormBuilder,
    private servicio: CrudempleadosService
    ) {
    this.formularioempleado = this.formulario.group(
      {
        id: [''],
        nombre: [''],
        correo: ['']
      }
    )
  }

  ngOnInit(): void {
    this.servicio.mostrarEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados=respuesta;
      // this.Empleados=repuesta;
    });
  }
  enviarInfo() {
    console.log("hola");
    console.log(this.formularioempleado.value);
    this.servicio.agregarEmpleados(this.formularioempleado.value).subscribe();

  }

}
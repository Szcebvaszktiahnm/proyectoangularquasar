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
    );
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

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Estas seguro que desea eliminar el empleado?")){
      this.servicio.borrarEmpleados(id).subscribe((respuesta)=>{this.Empleados.splice(iControl,1);
      });
    }

  }
  editarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Estas seguro que desea modificar al empleado?")){
      this.servicio.modificarEmpleados(id).subscribe((respuesta)=>{this.Empleados.splice(iControl,1);
      });
    }

  }
}

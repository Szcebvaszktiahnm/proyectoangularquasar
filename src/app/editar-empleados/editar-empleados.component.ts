import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CrudempleadosService } from '../servicios/crudempleados.service';


@Component({
  selector: 'app-editar-empleados',
  templateUrl: './editar-empleados.component.html',
  styleUrls: ['./editar-empleados.component.css']
})
export class EditarEmpleadosComponent implements OnInit {
elID:any;
formularioempleado: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private rutaactiva:ActivatedRoute,
    private servicio: CrudempleadosService
  ) {
    this.elID=this.rutaactiva.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.formularioempleado = this.formulario.group(
      {
        nombre: [''],
        correo: ['']
      }
    );

    this.servicio.obtenerEmpleado(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioempleado.setValue(
        {
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']
        }


      );
    });
    
  }

  ngOnInit(): void {
  }
  enviarInfo():any{
    console.log(this.elID);
    console.log(this.formularioempleado.value);
    //this.servicio.modificarEmpleados(this.formularioempleado.value).subscribe();
    this.servicio.editarEmpleado(this.elID,this.formularioempleado.value).subscribe(()=>{}); 
  }
}

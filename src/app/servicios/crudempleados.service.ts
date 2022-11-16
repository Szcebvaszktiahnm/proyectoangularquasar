import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { empleados } from './empleados';

@Injectable({
  providedIn: 'root'
})
export class CrudempleadosService {
API:string = 'http://api.institutequasar.com/';//api de php CRUD (API)
  constructor(
    private conexionservicio:HttpClient) {}
  agregarEmpleados(datosEmpleado:empleados):Observable<any>{ 
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
}
mostrarEmpleados(){
  return this.conexionservicio.get(this.API);
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { empleados } from './empleados';

@Injectable({
  providedIn: 'root'
})
export class CrudempleadosService {
API:string = 'http://localhost/empleados/';//'http://api.institutequasar.com/';//api de php CRUD (API) - 'http://localhost/empleados/'
  constructor(
    private conexionservicio:HttpClient) {}
  agregarEmpleados(datosEmpleado:empleados):Observable<any>{ 
    return this.conexionservicio.post(this.API+"?insertar=1",datosEmpleado);
}
mostrarEmpleados(){
  return this.conexionservicio.get(this.API);
}
borrarEmpleados(id:any):Observable<any>{ 
  return this.conexionservicio.get(this.API+"?borrar=1",id);
}

modificarEmpleados(id:any):Observable<any>{ 
  return this.conexionservicio.get(this.API+"?actualizar=1",id);
}

obtenerEmpleado(id:any):Observable<any>{ 
  return this.conexionservicio.get(this.API+"?consultar="+id);
}

editarEmpleado(id:any,datosEmpleado:any):Observable<any>{
  return this.conexionservicio.post(this.API+"?actualizar="+id,datosEmpleado);
}

}
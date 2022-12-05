import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { EmpleadoService } from '../services/empleados.service';

@Component({
  selector: 'app-items',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  empleados: Empleado[]=[];

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void{
    this.getEmpleados();
  }

  getEmpleados(): void{
    this.empleadoService.getEmpleados().subscribe(empleados => this.empleados = empleados);
  }

  add(name:string,role:string,gender:string): void{
   let Emp= {} as Empleado;
   Emp.nombre=name.trim();
   Emp.rol=role.trim();
   Emp.genero=gender.trim();

   let nom = Emp.nombre.trim();
   if(!nom){return}
   this.empleadoService.addEmpleado(Emp)
     .subscribe(Emp => {
       this.empleados.push(Emp);
       console.log(Emp);
   });
 }

   delete(emp: Empleado): void{
     this.empleados = this.empleados.filter(i => i !== emp);
     this.empleadoService.deleteEmpleado(emp.id).subscribe();
   }
}

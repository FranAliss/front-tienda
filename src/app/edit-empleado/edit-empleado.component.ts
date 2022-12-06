import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Empleado } from '../interfaces/empleado.interface';
import { EmpleadoService } from '../services/empleados.service';



@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.scss']
})
export class EditEmpleadoComponent {
  empleado!:Empleado;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empleadoService.getEmpleado(id)
      .subscribe(hero => this.empleado = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.empleado) {
      this.empleadoService.updateEmpleado(id, this.empleado)
        .subscribe(() => this.goBack());
    }
  }
}

import { Component } from '@angular/core';
import { Pedido } from '../interfaces/pedidos.interface'; //cambiar a items
import { PedidosService } from '../services/pedidos.service';
import { Empleado } from '../interfaces/empleado.interface';
import { EmpleadoService } from '../services/empleados.service';
 


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {
  pedidos: Pedido[]=[];

  constructor(private pedidoService:PedidosService, private empleadoService:EmpleadoService) { }

  ngOnInit(): void{
    this.getItems();
  }

  getItems(): void{
    this.pedidoService.getPedidos().subscribe(p => this.pedidos = p);
  }

  add(date:string, id:string): void{
    let pedido= {} as Pedido;
    pedido.fecha =date.trim();
    console.log(`id=${+id}`);

    // let emp={} as Empleado;
    // this.empleadoService.getEmpleado(+id).subscribe(p => {emp = p; console.log(`pedido=${emp.id}`);
    // console.log(`p=${p.id}`)});
    
    pedido.empleado = +id;

    this.pedidoService.addPedidos(pedido)
      .subscribe(item => {this.pedidos.push(item);console.log(item)});

    console.log(pedido.empleado);
   }

   delete(pedido: Pedido): void{
     this.pedidos = this.pedidos.filter(i => i !== pedido);
     this.pedidoService.deletePedidos(pedido.id).subscribe();
   }
}

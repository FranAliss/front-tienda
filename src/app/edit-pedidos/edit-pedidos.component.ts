import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pedido } from '../interfaces/pedidos.interface';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-edit-pedidos',
  templateUrl: './edit-pedidos.component.html',
  styleUrls: ['./edit-pedidos.component.scss']
})
export class EditPedidosComponent {

  pedido!:Pedido;

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pedidoService.getPedido(id)
      .subscribe(i => this.pedido = i);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.pedido) {
      this.pedidoService.updateItem(id, this.pedido)
        .subscribe(() => this.goBack());
    }
  }
}

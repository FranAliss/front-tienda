import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../interfaces/items.interface';
import { ItemService } from '../services/items.service';



@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {

  item!:Item;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: ItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empleadoService.getItem(id)
      .subscribe(i => this.item = i);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.item) {
      this.empleadoService.updateItem(id, this.item)
        .subscribe(() => this.goBack());
    }
  }
}

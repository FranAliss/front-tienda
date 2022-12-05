import { Component } from '@angular/core';
import { Item } from '../interfaces/items.interface'; //cambiar a items
import { ItemService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  items: Item[]=[];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void{
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe(item => this.items = item);
  }

  add(name:string,role:string): void{
   let item= {} as Item;
   item.nombre=name.trim();
   item.precio=role.trim();

   this.itemService.addItem(item)
     .subscribe(item => {
       this.items.push(item);
       console.log(item);
   });
 }

   delete(it: Item): void{
     this.items = this.items.filter(i => i !== it);
     this.itemService.deleteItem(it.id).subscribe();
   }
}

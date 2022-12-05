import { Component } from '@angular/core';
import { Empleado } from '../empleado.interface';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  instrumentos: Empleado[]=[];

  constructor(private instrumentsService:ItemService) { }

  ngOnInit(): void{
    this.getInstrumentos();
  }

  getInstrumentos(): void{
    this.instrumentsService.getHeroes().subscribe(instrumentos => this.instrumentos = instrumentos);
  }

  add(name:string,role:string,gender:string): void{
   let Inst= {} as Empleado;
   Inst.nombre=name.trim();
   Inst.rol=role.trim();
   Inst.genero=gender.trim();

   let nom = Inst.nombre.trim();
   if(!nom){return}
   this.instrumentsService.addHero(Inst)
     .subscribe(Inst => {
       this.instrumentos.push(Inst);
       console.log(Inst);
   });
 }

   delete(inst: Empleado): void{
     this.instrumentos = this.instrumentos.filter(i => i !== inst);
     this.instrumentsService.deleteHero(inst.id).subscribe();
   }
}

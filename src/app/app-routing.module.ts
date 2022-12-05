import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PedidosComponent } from './pedidos/pedidos.component';


const routes: Routes = [
  {path: "", pathMatch:"full",redirectTo:"/"},
  {path:"pedidos", component: PedidosComponent},
  {path:"empleados", component: EmpleadosComponent},
  {path:"items", component: ItemsComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

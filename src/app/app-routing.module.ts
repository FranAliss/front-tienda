import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EdicionComponent } from './edicion/edicion.component';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { EditPedidosComponent } from './edit-pedidos/edit-pedidos.component';
import { EditItemComponent } from './edit-item/edit-item.component';


const routes: Routes = [
  {path: "", pathMatch:"full",redirectTo:"/"},
  {path:"pedidos", component: PedidosComponent},
  {path:"empleados", component: EmpleadosComponent},
  {path:"items", component: ItemsComponent},
  {path:"edicion", component: EdicionComponent},
  {path: 'employee/:id', component: EditEmpleadoComponent },
  {path: 'requests/:id', component: EditPedidosComponent },
  {path: 'items/:id', component: EditItemComponent },

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

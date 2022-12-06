import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EdicionComponent } from './edicion/edicion.component';
import { FormsModule } from '@angular/forms';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { EditPedidosComponent } from './edit-pedidos/edit-pedidos.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    EmpleadosComponent,
    PedidosComponent,
    EdicionComponent,
    EditEmpleadoComponent,
    EditPedidosComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

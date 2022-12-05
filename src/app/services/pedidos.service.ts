import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pedido } from '../interfaces/pedidos.interface';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedidosUrl = 'http://localhost:3000/pedidos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getPedidos(): Observable<any> {
    return this.http.get<any>(this.pedidosUrl)
      .pipe(
        tap(_ => console.log('Pedidos obtenidos')),
        catchError(this.handleError<any>('getEmpleados', []))
      );
  }

  getPedido(id: number): Observable<any> {
    const url = this.pedidosUrl+`/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`Pedidos obtenido id=${id}`)),
      catchError(this.handleError<any>(`getEmpleado id=${id}`))
    );
  }

  addPedidos(pedido: Pedido): Observable<any> {
    return this.http.post<any>(this.pedidosUrl, pedido, this.httpOptions).pipe(
      tap((newItem: Pedido) => console.log(`Pedidos aniadido con id=${newItem.id}`)),
      catchError(this.handleError<any>('addEmpleado'))
    );
  }

  deletePedidos(id: number): Observable<any> {
    const url = this.pedidosUrl+`/${id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Pedidos borrado id=${id}`)),
      catchError(this.handleError<any>('deleteEmpleado'))
    );
  }

  updateItem(pedido: Pedido): Observable<any> {
    return this.http.put(this.pedidosUrl, pedido, this.httpOptions).pipe(
      tap(_ => console.log(`Pedidos actualizado id=${pedido.id}`)),
      catchError(this.handleError<any>('updateEmpleado'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

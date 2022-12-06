import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from '../interfaces/items.interface';



@Injectable({ providedIn: 'root' })
export class ItemService {

  itemsUrl = 'http://localhost:3000/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getItems(): Observable<any> {
    return this.http.get<any>(this.itemsUrl)
      .pipe(
        tap(_ => console.log('Empleados obtenidos')),
        catchError(this.handleError<any>('getEmpleados', []))
      );
  }

  getItem(id: number): Observable<any> {
    const url = this.itemsUrl+`/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`Item obtenido id=${id}`)),
      catchError(this.handleError<any>(`getEmpleado id=${id}`))
    );
  }

  addItem(item: Item): Observable<any> {
    return this.http.post<any>(this.itemsUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => console.log(`Empleado aniadido con id=${newItem.id}`)),
      catchError(this.handleError<any>('addEmpleado'))
    );
  }

  deleteItem(id: number): Observable<any> {
    const url = this.itemsUrl+`/${id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Empleado borrado id=${id}`)),
      catchError(this.handleError<any>('deleteEmpleado'))
    );
  }

  updateItem(id:number, item: Item): Observable<any> {
    const url = this.itemsUrl+`/${id}`;
    return this.http.put(url, item, this.httpOptions).pipe(
      tap(_ => console.log(`heroe actualizado id=${item.id}`)),
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

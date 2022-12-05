import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Empleado } from './empleado.interface';



@Injectable({ providedIn: 'root' })
export class ItemService {

  empleadosUrl = 'http://localhost:3000/empleados';
  itemsUrl = 'http//localhost:3000/items';
  pedidosUrl = 'http//localhost:3000/pedidos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  sort(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/empleados')
      .pipe(
        tap(_ => console.log('lista revertida')),
        catchError(this.handleError<any>('getHeroes', []))
      );
  }

  getHeroes(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/empleados')
      .pipe(
        tap(_ => console.log('heroes obtenidos')),
        catchError(this.handleError<any>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<any> {
    const url = `http://localhost:3000/empleados/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`heroe obtenido id=${id}`)),
      catchError(this.handleError<any>(`getHero id=${id}`))
    );
  }




  addHero(hero: Empleado): Observable<any> {
    return this.http.post<any>('http://localhost:3000/empleados', hero, this.httpOptions).pipe(
      tap((newHero: Empleado) => console.log(`heroe aniadido con id=${newHero.id}`)),
      catchError(this.handleError<any>('addHero'))
    );
  }

  deleteHero(id: number): Observable<any> {
    const url = `http://localhost:3000/empleados/${id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`heroe borrado id=${id}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }

  updateHero(hero: Empleado): Observable<any> {
    return this.http.put('http://localhost:3000/empleados', hero, this.httpOptions).pipe(
      tap(_ => console.log(`heroe actualizado id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Empleado } from '../interfaces/empleado.interface';



@Injectable({ providedIn: 'root' })
export class EmpleadoService {

  empleadosURL = 'http://localhost:3000/empleados';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getEmpleados(): Observable<any> {
    return this.http.get<any>(this.empleadosURL)
      .pipe(
        tap(_ => console.log('Empleados obtenidos')),
        catchError(this.handleError<any>('getEmpleados', []))
      );
  }

  getEmpleado(id: number): Observable<any> {
    const url = `http://localhost:3000/empleados/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`Empleado obtenido id=${id}, http://localhost:3000/empleados/${id}`)),
      catchError(this.handleError<any>(`getEmpleado id=${id}`))
    );
  }

  addEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post<any>(this.empleadosURL, empleado, this.httpOptions).pipe(
      tap((NewEmpleado: Empleado) => console.log(`Empleado aniadido con id=${NewEmpleado.id}`)),
      catchError(this.handleError<any>('addEmpleado'))
    );
  }

  deleteEmpleado(id: number): Observable<any> {
    const url = `http://localhost:3000/empleados/${id}`;

    return this.http.delete<any>(url, this.httpOptions).pipe(
      tap(_ => console.log(`Empleado borrado id=${id}`)),
      catchError(this.handleError<any>('deleteEmpleado'))
    );
  }

  updateEmpleado(empleado: Empleado): Observable<any> {
    return this.http.put('http://localhost:3000/empleados', empleado, this.httpOptions).pipe(
      tap(_ => console.log(`heroe actualizado id=${empleado.id}`)),
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

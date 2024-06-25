import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { Empleado } from '../models/empleado';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl = 'http://localhost:8080/Empleado';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body',
    params: {}, 
    cache: true, 
    responseType: 'json' as 'json',
    timeout: 15000 
  };

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Empleado[]>{
    return this.http.get<any>(`${this.baseUrl}`, this.httpOptions).pipe(
      map(response  => response.body),
      catchError(error => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }

  create(empleado : Empleado) :  Observable<Empleado>{
    return this.http.post<any>(`${this.baseUrl}`, empleado,  this.httpOptions).pipe(
    map(response  => response.body),
    catchError(error => {
      let errorMessage = 'Ocurrió un error desconocido';
      if (error && error.message) {
        errorMessage = error.message;
      }
      throw errorMessage;
    })
    );
  } 

  edit(empleado : Empleado) :  Observable<Empleado>{
    return this.http.put<any>(`${this.baseUrl}`, empleado,  this.httpOptions).pipe(
    map(response  => response.body),
    catchError(error => {
      let errorMessage = 'Ocurrió un error desconocido';
      if (error && error.message) {
        errorMessage = error.message;
      }
      throw errorMessage;
    })
    );
  } 
  

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Zone } from '../models/zone.model';
import { API_BASE_URL } from '../config';
import { PaginatedResponse } from '../models/paginatedResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private baseUrl = 'https://api.mockfly.dev/mocks/853aea1c-2041-4f94-a0ad-f42901c16455/zona';
  private baseUrlLocal = 'http://localhost:8080/Zona'

  zonesCache !: Observable<Zone[]> ;

  cacheDisponible = false;

  url = `${this.baseUrl}`;
  httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response' as 'body',
          params: {}, // if you have any params to send
          cache: true, // enable caching
          responseType: 'json' as 'json',
          timeout: 15000 // 30 seconds timeout
  };
   

  constructor(private http: HttpClient) { }

  getAllZonas() : Observable<Zone[]> {
    if(!this.cacheDisponible){
    return this.http.get<any>(`${this.baseUrlLocal}/NoPaginable`, this.httpOptions).pipe(
      map(response  =>{
        this.cacheDisponible = true;
        return response.body; 
      } ),
      catchError(error => {
        // Handle error
        console.error('An error occurred:', error);
        throw error;
      })
    );
    }
    return this.zonesCache;
  }

  getAll(): Observable<PaginatedResponse> 
  {
    const url = `${this.baseUrl}`;
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response' as 'body',
          params: {}, // if you have any params to send
          cache: true, // enable caching
          responseType: 'json' as 'json',
          timeout: 30000 // 30 seconds timeout
        };

        /*if (this.cache) {
          return of(this.cache);
        }*/

        return this.http.get<any>(`${this.baseUrlLocal}`, httpOptions).pipe(
          map(response  => response.body),
          catchError(error => {
            // Handle error
            console.error('An error occurred:', error);
            throw error;
          })
        );
  }

  create(newZone : Zone ): Observable<Zone>{
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response' as 'body',
          params: {}, // if you have any params to send
          cache: true, // enable caching
          responseType: 'json' as 'json',
          timeout: 30000 // 30 seconds timeout
        };

      return this.http.post<any>(`${this.baseUrlLocal}`, newZone, httpOptions).pipe(
      map(response  => response.body),
      catchError(error => {
        let errorMessage = 'Ocurrió un error desconocido';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        return throwError(errorMessage);
      })
    );
  }

  
}

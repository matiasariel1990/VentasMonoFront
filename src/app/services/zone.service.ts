import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Zone } from '../models/zone.model';
import { API_BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  private baseUrl = 'https://api.mockfly.dev/mocks/853aea1c-2041-4f94-a0ad-f42901c16455/zona';
  private cache: Zone[] = [];

  constructor(private http: HttpClient) { }


  getAll(): Observable<Zone[]> 
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

        return this.http.get<any>(url, httpOptions).pipe(
          map(response  => response.body),
          tap((data: Zone[]) => this.cache = data), // Cache the data
          catchError(error => {
            // Handle error
            console.error('An error occurred:', error);
            throw error;
          })
        );
  }

  
}

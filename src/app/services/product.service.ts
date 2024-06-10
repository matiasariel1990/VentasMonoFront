import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductListItem } from '../models/producListItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  private baseUrlLocal = 'http://localhost:8080/Producto'

  productosCache !: Observable<ProductListItem[]> ;

  cacheDisponible = false;

  httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          observe: 'response' as 'body',
          params: {}, 
          cache: true, 
          responseType: 'json' as 'json',
          timeout: 15000 
  };
   
   


  constructor(private http: HttpClient) {
    // Genera 10 productos aleatorios
    for (let i = 1; i <= 10; i++) {
      this.products.push({
        id: i,
        description: `Product ${i}`,
        price: Math.floor(Math.random() * 100) + 1, // Precio aleatorio entre 1 y 100,
        cantidad : 0
      });
    }
  }

  getListProductos(): Observable<ProductListItem[]> {
    if(!this.cacheDisponible){
      return this.http.get<any>(`${this.baseUrlLocal}/listado`, this.httpOptions).pipe(
        map(response  =>{
          this.cacheDisponible = true;
          this.productosCache = response.body;
          return response.body; 
        } ),
        catchError(error => {
          // Handle error
          console.error('An error occurred:', error);
          throw error;
        })
      );
      }
      return this.productosCache;
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id : number){
    return this.http.post<any>(`${this.baseUrlLocal}/`+ id, this.httpOptions).pipe(
      map(response  =>{
        return response.body; 
      } ),
      catchError(error => {
        // Handle error
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }

  
}

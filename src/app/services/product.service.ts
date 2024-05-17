import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {
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

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  
}

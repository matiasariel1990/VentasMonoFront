import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {


  products: Product[] = [];

  pages : number[] = [1,2,3,4,5,6,7,8,9,10];

  currentPage : number = 1 ;

  filtro : Product  = {
    id: 976,
    description: 'Juego de Sabanas para probar',
    price: 500000,
    cantidad: 0
  };

  productSelected : Product = {
    id: 976,
    description: 'Juego de Sabanas para probar',
    price: 500000,
    cantidad: 0
  };

  edit: boolean = false;
  nuevo: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });

    this.products.push(this.productSelected);
    this.productSelected = this.products[0];
  }

  openEditDialog(product: Product): void {
    this.edit = true;
    this.nuevo = false;
    this.productSelected = product;
  }

  guardar(){
    this.products.push(this.productSelected);
  }

  guardarNuevo(){
    this.products.push(this.productSelected);
  }

  agregar(){
    this.nuevo = true;
    this.edit = false;
  }

  cancelar(){
    this.edit = false;
    this.nuevo = false;
  }

  goToPage(page: number){

  }

  detalle(product: Product): void {
    this.edit = true;
    this.nuevo = false;
    this.productSelected = product;
  }

}

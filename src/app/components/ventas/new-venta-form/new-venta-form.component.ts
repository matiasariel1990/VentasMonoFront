import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Empleado } from 'src/app/models/empleado';
import { Product } from 'src/app/models/product.model';
import { ClientService } from 'src/app/services/client.service';
import { CuotaService } from 'src/app/services/cuota.service';
import { ProductService } from 'src/app/services/product.service';
import { VendedorService } from 'src/app/services/vendedor.service';

@Component({
  selector: 'app-new-venta-form',
  templateUrl: './new-venta-form.component.html',
  styleUrls: ['./new-venta-form.component.scss'],
})
export class NewVentaFormComponent  implements OnInit {

  clients : Cliente[] = [];

  products: Product[] = [];

  productsSelected :  Product[] = [];

  vendedores : Empleado[] = [];

  cantidadCuotas : number = 0;

  totalVenta : number = 0;

  selectedClient : Cliente ={
    codigo: 0,
    nombre: '',
    apellido: '',
    dni: '',
    zona: 0
  };

  selectedVendor : String = "";

  constructor(private cuotaService: CuotaService,
    private productService: ProductService,
    private clientService: ClientService,
    private vendedorService: VendedorService
  ) {
  }

  ngOnInit() {
    this.clients = this.clientService.getAll();
    this.vendedores = this.vendedorService.getAll();
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onClientChange(){

  }

  onVendorChange(){

  }


  generarCuotas(){
    this.cuotaService.generarCuotas(this.cantidadCuotas);
  }

}

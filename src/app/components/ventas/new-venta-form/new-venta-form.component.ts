import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Toast, ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente.model';
import { Cuota } from 'src/app/models/cuota.model';
import { Empleado } from 'src/app/models/empleado';
import { ProductListItem } from 'src/app/models/producListItem';
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




finalizarVenta() {
throw new Error('Method not implemented.');
}


  opcionCuotas: number[] = [1,2,3,4,5,6,7,8,9,10,12, 18, 24];

  fechaVenta: Date | null = null;

  clients : Cliente[] = [];

  products: Product[] = [];

  cuotas: Cuota[] = [];

  productsDisponibles ?:  ProductListItem[];

  productsFiltrados ?:  ProductListItem[];

  filtroProducto ?: string;

  vendedores : Empleado[] = [];

  cantidadCuotas : number = 0;

  totalVenta : number = 1000000;

  menuProductos ?: boolean;

  selectedClient : Cliente ={
    codigo: 0,
    nombre: '',
    apellido: '',
    dni: '',
    zona: 0,
    calle: '',
    numeracion: '',
    localidad: '',
    telefono: ''
  };

  selectedVendor : String = "";

  constructor(private cuotaService: CuotaService,
    private productService: ProductService,
    private clientService: ClientService,
    private vendedorService: VendedorService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.clients = this.clientService.getAll();
    this.vendedores = this.vendedorService.getAll();
    this.productService.getListProductos().subscribe(
      products => {
      this.productsDisponibles = products;
    });
  }

  onClientChange(){

  }

  onVendorChange(){

  }

  habilitarMenuProductos() {
    this.menuProductos = true;
    this.productsFiltrados = this.productsDisponibles;
  }


  generarCuotas(){
    if(this.fechaVenta != null){
      this.cuotas = this.cuotaService.generarCuotas(this.cantidadCuotas, 
      this.totalVenta, this.fechaVenta);
    }else{
      this.toastr.warning('Debe indicar una fecha de Venta', 'Advertencia!')
    }
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.fechaVenta = event.value;
    console.log('Fecha seleccionada:', this.fechaVenta);
  }

  onCuotasChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.cantidadCuotas = Number(selectElement.value);
    console.log('Cantidad de cuotas seleccionada:', this.cantidadCuotas);
  }

  onDateChangeCuota(event: MatDatepickerInputEvent<Date>, cuota : Cuota) {
    if(event.value != null ) cuota.fechaPago = event.value;
    console.log('Fecha seleccionada:', this.fechaVenta);
  }

  agregarProducto(productSelected: ProductListItem) {
    productSelected.seleccionado = true;
    this.productService.getProductById(productSelected.codigo).subscribe(
      product => this.products.push(product)
    )
  }

  filtroProductoChange() {
    this.productsFiltrados = this.productsDisponibles?.filter(
      product => {
        if(this.filtroProducto != null) {
          return product.descripcion.includes(this.filtroProducto)}
        else{
          return this.productsDisponibles;
        }}

    );
  }

}

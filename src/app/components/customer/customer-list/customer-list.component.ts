import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { CustomerService } from 'src/app/services/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  clientes : Cliente[];
  filtro: string = '';
  currentPage : string = "1";
  paginas : number []  = [1,2,3,4,5,6,7,8,9,10]

  constructor(private customerService: CustomerService){
    this.clientes = customerService.getClientes();
  }

   ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clientes = this.customerService.getClientes();
  }
   
  setCurrentPage(page : string){

  }
}

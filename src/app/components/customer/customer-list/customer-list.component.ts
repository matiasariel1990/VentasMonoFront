import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { CustomerService } from 'src/app/services/customer.service';
import { FormsModule } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { Zone } from 'src/app/models/zone.model';
import { ZoneService } from 'src/app/services/zone.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {




  clientes!: Cliente[];
  nuevoCliente : Cliente = {
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

  currentCliente !: Cliente; 

  filtro: string = '';
  zones!: Zone[];
  currentPage : string = "1";
  paginas : number []  = [1,2,3,4,5,6,7,8,9,10];

  clienteFiltro: Cliente = {
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

  newOptions : boolean = false;

  editOptions : boolean = false;

  constructor(private clientservice: ClientService,
    private zoneservice: ZoneService,
    private toastr: ToastrService,
    private router: Router
  ){
    this.clientes = clientservice.getAll();
    
  }

   ngOnInit(): void {
    this.loadClients();
    this.zoneservice.getAllZonas().subscribe(
      zonas => { this.zones = zonas;
      this.toastr.success('Zonas cargadas');
      }
    );
  }

  loadClients(){
    this.clientes = this.clientservice.getAll();
  }

  agregar() {
    this.newOptions = true;
    this.editOptions = false;
  }
  
  
  crearCliete() {
    throw new Error('Method not implemented.');
  }

  viewDeails(_t47: Cliente) {
    this.editOptions = true;
    this.newOptions = false;
  }
   
  setCurrentPage(page : string){

  }

  closeMenu(){
    this.editOptions = false;
    this.newOptions = false;
  }

  menuHabilitado(): any {
    return this.newOptions || this.editOptions;
  }

  nuevaVenta() {
    this.router.navigate(["/newVenta"]);
  }
  editarCliente() {
    throw new Error('Method not implemented.');
  }
}

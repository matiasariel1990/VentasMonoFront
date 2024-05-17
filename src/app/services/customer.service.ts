import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private clientes: Cliente[] = [
    { codigo: 1, nombre: 'Juan', apellido: 'Perez', dni: '12345678', zona: 1 },
    { codigo: 2, nombre: 'María', apellido: 'González', dni: '87654321', zona: 3},
    // Agrega más clientes según sea necesario
  ];
  
  constructor() { }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  // Método para obtener un cliente por su código
  getCliente(codigo: number): any {
    return this.clientes.find(cliente => cliente.codigo === codigo);
  }
}

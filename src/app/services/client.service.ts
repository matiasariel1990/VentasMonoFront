import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';

const CLIENTES: Cliente[] =[
  {
    codigo: 1, nombre: 'Juan', apellido: 'Pérez', dni: '12345678A', zona: 1,
    calle: 'Belgrano',
    numeracion: '5758',
    localidad: 'Villa Ballester',
    telefono: ''
  },
  {
    codigo: 2, nombre: 'María', apellido: 'Gómez', dni: '87654321B', zona: 2,
    calle: 'San Telmo',
    numeracion: 'San Martin',
    localidad: 'Jujuy',
    telefono: ''
  },
  {
    codigo: 3, nombre: 'Pedro', apellido: 'Rodríguez', dni: '56789012C', zona: 1,
    calle: '',
    numeracion: '',
    localidad: '',
    telefono: ''
  },
  {
    codigo: 4, nombre: 'Ana', apellido: 'Martínez', dni: '23456789D', zona: 3,
    calle: '',
    numeracion: '',
    localidad: '',
    telefono: ''
  },
  {
    codigo: 5, nombre: 'Luis', apellido: 'López', dni: '90123456E', zona: 2,
    calle: '',
    numeracion: '',
    localidad: '',
    telefono: ''
  },
  // Puedes agregar más clientes según sea necesario
];


@Injectable({
  providedIn: 'root'
})


export class ClientService {
  
  constructor(private http: HttpClient) { }

  getAll(){
    return CLIENTES;
  }

  getAllByName(){

  }

  getById(){

  }

}

import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

export const EMPLEADOS: Empleado[] = [
  { id: 1, nombre: 'Carlos', apellido: 'García', tipo: 1, dni: 12345678 },
  { id: 2, nombre: 'María', apellido: 'López', tipo: 1, dni: 23456789 },
  { id: 3, nombre: 'Pedro', apellido: 'Martínez', tipo: 1, dni: 34567890 },
  { id: 4, nombre: 'Ana', apellido: 'Rodríguez', tipo: 1, dni: 45678901 },
  { id: 5, nombre: 'Juan', apellido: 'Sánchez', tipo: 1, dni: 56789012 }
];

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor() { }

  getAll(): Empleado[]{
    return EMPLEADOS;
  }
}

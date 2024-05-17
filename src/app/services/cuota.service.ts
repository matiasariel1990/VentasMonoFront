import { Injectable } from '@angular/core';
import { Cuota } from '../models/cuota.model';

@Injectable({
  providedIn: 'root'
})
export class CuotaService {

  constructor() { }

  generarCuotas(cantidadCuotas: number){
    const cuotas: Cuota[] = [];
    const fechaActual = new Date(); // Obtiene la fecha actual

  for (let i = 0; i < cantidadCuotas; i++) {
    const fechaCuota = new Date(fechaActual); // Crea una nueva fecha basada en la fecha actual
    fechaCuota.setMonth(fechaCuota.getMonth() + i + 1); // Agrega i meses a la fecha de la cuota

    // Crea una nueva cuota con la fecha calculada y otros datos
    const cuota: Cuota = {
      id: i + 1,
      descripcion: `Cuota ${i + 1}`,
      fechaPago: fechaCuota,
      ventaId: 0, // Puedes establecer el ID de la venta si es necesario
      monto: 0, // Puedes establecer el monto de la cuota si es necesario
      estado: 'Pendiente' // Puedes establecer el estado de la cuota si es necesario
    };

    cuotas.push(cuota); // Agrega la cuota a la lista de cuotas
  }

  return cuotas; 
  }
}

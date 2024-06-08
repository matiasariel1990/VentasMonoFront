import { Injectable } from '@angular/core';
import { Cuota } from '../models/cuota.model';

@Injectable({
  providedIn: 'root'
})
export class CuotaService {

  constructor() { }

  generarCuotas(cantidadCuotas: number, montoTotal : number, fechaVenta: Date ){
    let cuotas: Cuota[] = [];
    let fechaCuota = new Date(fechaVenta);
    let montoCuota = montoTotal/cantidadCuotas;

    for (let i = 0; i < cantidadCuotas; i++) {
    if(fechaCuota.getMonth() == 11){
      fechaCuota.setFullYear(fechaCuota.getFullYear() + 1, 0)
    }else{
      fechaCuota.setMonth(fechaCuota.getMonth() + 1); 
    }
    

    let cuota: Cuota = {
      id: i + 1,
      descripcion: `Cuota ${i + 1}`,
      fechaPago:  new Date(fechaCuota),
      ventaId: 0, 
      monto: montoCuota,  
      estado: '' 
    };

    cuotas.push(cuota); 
  }

  return cuotas; 
  }
}

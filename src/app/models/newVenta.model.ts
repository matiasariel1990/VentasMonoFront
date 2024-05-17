import { Cuota } from './cuota.model';

export interface Item {
  id: number;
  precio: number;
}

export interface NewVenta {
  cuotas: Cuota[];
  vendedor: string;
  cliente: string;
  items: Item[];
  total: number;
}
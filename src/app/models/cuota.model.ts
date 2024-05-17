export interface Cuota {
    id: number;
    descripcion: string;
    fechaPago: Date;
    ventaId: number;
    monto: number;
    estado: string;
  }
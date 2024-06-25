import { TipoEmpleado } from "./tipoempleado.enum";

export function mapToRole(roleNumber: number): TipoEmpleado {
    switch (roleNumber) {
      case 0:
        return TipoEmpleado.Indefinido;
      case 1:
        return TipoEmpleado.Cobrador;
      case 2:
        return TipoEmpleado.Vendedor;
      case 3:
        return TipoEmpleado.CompradorVendedor;
      default:
        return TipoEmpleado.Indefinido;
    }
  }

  export function mapToTipoEmpleado(roleNumber: String): number {
    switch (roleNumber) {
      case TipoEmpleado.Indefinido:
        return 0;
      case TipoEmpleado.Cobrador:
        return 1;
      case TipoEmpleado.Vendedor:
        return 2;
      case TipoEmpleado.CompradorVendedor:
        return 3;
      default:
        return 0;
    }
  }
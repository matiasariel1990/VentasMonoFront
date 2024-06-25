import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { TipoEmpleado } from 'src/app/models/tipoempleado.enum';
import { EmployeeService } from 'src/app/services/employee.service';
import { mapToRole, mapToTipoEmpleado } from 'src/app/models/tipoEmpleadoMapper';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})


export class EmployeesComponent  implements OnInit {
  

  tipoEmpleado = TipoEmpleado;
  tipos : string[];
  selectedTipo !: string;

  nuevoEmpleado : Empleado = {
    id: 0,
    nombre: '',
    apellido: '',
    tipoEmpleado: 0,
    dni: 0,
    telefono: 0
  };

  empleadoEdit : Empleado = {
    id: 0,
    nombre: '',
    apellido: '',
    tipoEmpleado: 0,
    dni: 0,
    telefono: 0
  };
  
  employees ?: Empleado[] ;

  newOptions : boolean = false; 
  editOptions : boolean = false;
  opcionSeleccionado: any;


  constructor(private employeeService : EmployeeService,
    private toastr : ToastrService) 
  { 
    this.tipos = Object.values(this.tipoEmpleado);
  }

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe(
        employeesResponse => {
          this.employees = employeesResponse
        },
        error =>  {this.toastr.error('Error cargando empleados', 'Error')          
        }
    )
   }

  newEmployeMenu() {
    this.newOptions  = true; 
    this.editOptions  = false;
  }

  viewDeails(empleado: Empleado) {
    this.empleadoEdit = empleado;
    this.selectedTipo = this.obtenerTipoEmpleado(empleado.tipoEmpleado)
    this.newOptions  = false; 
    this.editOptions  = true;
  }

  closeMenu() {
    this.newOptions  = false; 
    this.editOptions  = false;
  }

  menuHabilitado(): boolean {
    return this.newOptions ||  this.editOptions;
  }

  crearEmpleado() {
    this.nuevoEmpleado.tipoEmpleado = this.obtenerTipoEmpleadoNumber(this.opcionSeleccionado);
    this.employeeService.create(this.nuevoEmpleado).subscribe(
      response => {
        this.toastr.success('Empleado guardado', 'OK')
     },
     error =>  {
            console.error(error);
          this.toastr.error('Error guardando empleados', 'Error');
            }
    )
  }
  
  editarEmpleado() {
    this.empleadoEdit.tipoEmpleado = this.obtenerTipoEmpleadoNumber(this.opcionSeleccionado);
    this.employeeService.create(this.empleadoEdit).subscribe(
      response => {
        this.toastr.success('Empleado editado', 'OK')
     },
     error =>  {this.toastr.error('Error guardando empleados', 'Error')
            }
    )
  }

  obtenerTipoEmpleado(arg0: number){
    return mapToRole(arg0).toString();
  }

  obtenerTipoEmpleadoNumber(arg0: String) : number{
    return mapToTipoEmpleado(arg0);
  }
  

}

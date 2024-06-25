import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';


import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { NewVentaFormComponent } from './components/ventas/new-venta-form/new-venta-form.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent }, 
  { path: 'employees',component: EmployeesComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'newVenta', component: NewVentaFormComponent },
  { path: 'zones', component: ZoneListComponent }
  // Esta línea mapea la URL '/clientes' al componente ClientesComponent
  // Puedes agregar más rutas aquí si tienes otros componentes
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

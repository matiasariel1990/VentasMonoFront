import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { NewVentaFormComponent } from './components/ventas/new-venta-form/new-venta-form.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ZoneListComponent,
    ProductComponent,
    ProductListComponent,
    NewVentaFormComponent,
    ZoneListComponent,
    CustomerListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot({}),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

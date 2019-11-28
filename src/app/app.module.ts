import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '@environments/environment'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




import { CanAccessDirective } from './directives/can-access.directive';


import { HeaderComponent } from './layout/main/header/header.component';
import { MenuComponent } from './layout/main/menu/menu.component';
import { FooterComponent } from './layout/main/footer/footer.component';



import { CleanComponent } from './layout/clean/clean.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerdetailComponent } from './components/customers/customerdetail/customerdetail.component';
import { CreatecustomerComponent } from './components/customers/createcustomer/createcustomer.component';
import { CustomerlistComponent } from './components/customers/customerlist/customerlist.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ProductsComponent } from './components/products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    CanAccessDirective,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    CleanComponent,
    DashboardComponent,
    CustomersComponent,
    CustomerdetailComponent,
    CreatecustomerComponent,
    CustomerlistComponent,
    SuppliersComponent,
    OrdersComponent,
    LocationsComponent,
    ProductsComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

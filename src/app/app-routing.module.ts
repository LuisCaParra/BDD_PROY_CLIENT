import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanComponent } from './layout/clean/clean.component';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerdetailComponent } from './components/customers/customerdetail/customerdetail.component';
import { CreatecustomerComponent } from './components/customers/createcustomer/createcustomer.component';
import { CustomerlistComponent } from './components/customers/customerlist/customerlist.component';

import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';





const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "",
    component: MainComponent,
    children: [
      { path: "home", component: DashboardComponent, },
      {
        path: 'customers', component: CustomerlistComponent, children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },

          { path: 'list', component: CustomerlistComponent, },
        ]
      },
      { path: "suppliers", component: SuppliersComponent, },
      { path: "orders", component: OrdersComponent, },
      { path: "products", component: ProductsComponent, },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

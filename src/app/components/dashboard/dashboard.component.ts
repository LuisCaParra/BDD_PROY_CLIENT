import { Component, OnInit } from '@angular/core';
import { Product } from '@app/services/models/product.model';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[];
  constructor(private authService: AuthService) { }
  addedProducts = [];
  selectedUser;
  users = []
  order_id: number
  customer_payment_method_id: number
  other_order_details: string
  customer_id: number
  total: number;

  ngOnInit() {
    this.products = this.authService.products
    this.users = this.authService.customers

    console.log(this.users)


  }


  onAddProduct(product) {
    this.addedProducts.push(product)
  }

  onRemoveProduct(ind) {
    if (this.addedProducts.length > 0) {
      this.addedProducts.splice(ind, 1);
    }
  }

  display: boolean = false;

  toggleDialog() {
    this.display = !this.display;
  }

  onGetTotal() {
    let sum = 0;
    for (let i = 0; i < this.addedProducts.length; i++) {
      sum = sum + this.addedProducts[i].produc_price;
      this.total += this.addedProducts[i].produc_price;
    }
    return sum;
  }


  onPlaceOrder() {

    console.log('>>' + this.onGetTotal());
    if (!this.selectedUser && !this.customer_payment_method_id && this.onGetTotal() > 0)
      console.log('error' + this.selectedUser)
    else {
      const id = Date.now();
      this.authService.Saveorder(id, this.customer_payment_method_id, new Date(Date.now()), new Date(Date.now()), this.other_order_details, Number(this.selectedUser), this.onGetTotal())
      this.addedProducts.forEach(element => {
        this.authService.SaveOrderCust(element.product_id, element.supplier_id, id, "paid", Number(this.selectedUser));

      });


    }
    this.addedProducts = []
    this.addedProducts = [];
    this.selectedUser = {};
    this.other_order_details = ""



    this.toggleDialog()
  }
}

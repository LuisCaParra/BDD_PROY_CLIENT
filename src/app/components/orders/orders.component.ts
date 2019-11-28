import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { Customer } from '@app/services/models/customer.model';
import { Suppliers } from '@app/services/models/suplires.model';
import { Product } from '@app/services/models/product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private authService: AuthService) { }
  orders: any;
  name: any;
  phone: any;
  email: any;
  details: any;
  selectedOrder: any;
  ngOnInit() {
    this.orders = this.authService.orders

    console.log(this.orders)
  }


  display: boolean = false;

  toggleDialog(order) {

    this.selectedOrder = this.authService.orderCustById(order.order_id)
    console.log(this.selectedOrder)
    this.display = !this.display;
  }

  getCustomerName(id) {
    const customer: Customer[] = this.authService.customerById(id)
    return customer[0].customer_name ? customer[0].customer_name : "Not Avialable";
  }

  getProductName(id) {
    const prod: Product[] = this.authService.ProductById(id)
    return prod[0].product_type_code ? prod[0].product_type_code : "Not Avialable";
  }

  getSuplierName(id) {
    const sup: Suppliers[] = this.authService.supplierById(id)
    return sup[0].supplier_name ? sup[0].supplier_name : "Not Avialable";
  }






}

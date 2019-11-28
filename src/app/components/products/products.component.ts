import { Component, OnInit } from '@angular/core';
import { Customer } from '@app/services/models/customer.model';
import { AuthService } from '@app/services/auth.service';
import { Product } from '@app/services/models/product.model';
import { Suppliers } from '@app/services/models/suplires.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private authService: AuthService) { }
  products: Product[];
  name: any;
  phone: any;
  email: any;
  price: any;
  suppliers: any;
  selectedSuplier: any;



  public produc_price: number
  ngOnInit() {
    this.products = this.authService.products
    this.suppliers = this.authService.suppliers
    console.log(this.products)
    console.log(this.suppliers)
  }


  display: boolean = false;

  toggleDialog() {
    this.display = !this.display;
  }

  getSupName(id) {
    const sup: Suppliers[] = this.authService.supplierById(id)
    return sup[0].supplier_name ? sup[0].supplier_name : "Not Avialable";
  }

  onSave() {
    console.log('error' + this.selectedSuplier)
    if (!this.name && !this.selectedSuplier && !this.price)
      console.log('error' + this.name)
    else
      this.authService.SaveProduct(this.products.length + 1, this.name, Number(this.selectedSuplier), this.price)

    this.name = ""
    this.price = null
    this.selectedSuplier = null
    this.products = this.authService.products
    this.toggleDialog()
  }


  onDelete(id) {
    this.authService.deleteProducts(id)
    console.log("deleted" + id)
    this.products = this.authService.products
  }

}

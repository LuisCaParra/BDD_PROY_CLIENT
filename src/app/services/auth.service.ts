import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { Customer } from './models/customer.model';
import { Address } from './models/adress.mode';
import { Suppliers } from './models/suplires.model';
import { Order } from './models/order.model';
import { ProductOrderCus } from './models/product_cust_orders.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _products: Product[] = [
    new Product(1, "Licuadora 3000", 1, 35.00),
    new Product(2, "Cafetera 25CFD", 1, 14.00),
    new Product(3, "Computadora hp", 4, 700.00),
    new Product(4, "Celular 25CLO", 4, 500.00),
    new Product(5, "Television SDW25", 3, 251.00),
    new Product(6, "Playera Roja", 2, 10.00),
    new Product(7, "Playera verde", 2, 10.00),
    new Product(8, "Componente 2514a", 3, 362.00),
    new Product(9, "Microondas 254df", 1, 100.00),


  ]

  private _customers: Customer[] = [
    new Customer(1, "Jhon Doe", 5550142, "Jhon-32@gmail.mx", "null", "1"),
    new Customer(2, "Pedro Prerez", 5550142, "Pedro-32@gmail.mx", "null", "2"),
    new Customer(3, "Juan Mendez", 5550142, "Juan-32@gmail.mx", "null", "3"),
    new Customer(4, "Jessica Doe", 5550142, "Jess-32@gmail.mx", "null", "4"),
    new Customer(5, "jovanna Doe", 5550142, "Doe-32@gmail.mx", "null", "5"),



  ]

  private _suppliers: Suppliers[] = [
    new Suppliers(1, "Jhon Doe", "Not"),
    new Suppliers(2, "Jess Doe", "Not"),
    new Suppliers(3, "Juan Doe", "Not"),
    new Suppliers(4, "Jero Doe", "Not"),

  ]

  private _addresses: Address[] = [
    new Address(1, "Ave. evergreen", 125, "centro", "CUU", "Chihuahua", "none", 31520),
    new Address(2, "Ave. evergreen", 125, "centro", "CUU", "Chihuahua", "none", 31520),
    new Address(3, "Ave. evergreen", 125, "centro", "CUU", "Chihuahua", "none", 31520),
    new Address(4, "Ave. evergreen", 125, "centro", "CUU", "Chihuahua", "none", 31520),
    new Address(5, "Ave. evergreen", 125, "centro", "CUU", "Chihuahua", "none", 31520),

  ]

  private _orders: Order[] = [
    new Order(1, 1, new Date(Date.now()), new Date(Date.now()), "not", 1, 1025.3),
    new Order(2, 0, new Date(Date.now()), new Date(Date.now()), "not", 1, 1253),
    new Order(3, 0, new Date(Date.now()), new Date(Date.now()), "not", 3, 3620),
    new Order(4, 1, new Date(Date.now()), new Date(Date.now()), "not", 1, 500),



  ]

  private _prodOrderCust: ProductOrderCus[] = [
    new ProductOrderCus(1, 1, 1, "Pagada", 1),
    new ProductOrderCus(1, 1, 1, "Pagada", 1),
    new ProductOrderCus(1, 2, 1, "Pagada", 1),
    new ProductOrderCus(6, 2, 1, "Pagada", 1),

    new ProductOrderCus(1, 1, 2, "Pagada", 2),
    new ProductOrderCus(7, 2, 2, "Pagada", 2),
    new ProductOrderCus(6, 2, 2, "Pagada", 2),


    new ProductOrderCus(1, 1, 3, "Pagada", 3),
    new ProductOrderCus(7, 2, 3, "Pagada", 3),
    new ProductOrderCus(6, 2, 3, "Pagada", 3),


    new ProductOrderCus(1, 1, 4, "Pagada", 4),
    new ProductOrderCus(7, 1, 4, "Pagada", 4),
    new ProductOrderCus(6, 1, 4, "Pagada", 4),



  ]




  constructor() { }

  get products() {
    return [...this._products]
  }

  ProductById(id) {
    return this._products.filter(prod => prod.product_id === id)
  }

  get suppliers() {
    return [...this._suppliers]
  }
  supplierById(id) {

    return this._suppliers.filter(sup => sup.supplier_id === id)
  }


  get customers() {
    return [...this._customers]
  }

  customerById(id) {

    return this._customers.filter(customer => customer.customer_id === id)
  }

  get addresses() {
    return [...this._addresses]
  }



  get orders() {
    return [...this._orders]
  }


  orderCustById(id) {
    return this._prodOrderCust.filter(order => order.order_id === id)
  }


  Saveorder(order_id: number,
    customer_payment_method_id: number,
    date_order_placed: Date,
    date_order_paid: Date,
    other_order_details: string,
    customer_id: number,
    der_order_price: number) {
    this._orders.push(new Order(order_id, customer_payment_method_id, date_order_placed, date_order_paid, other_order_details, customer_id, der_order_price))


  }


  SaveOrderCust(product_id: number,
    supplier_id: number,
    order_id: number,
    comments: string,
    customer_id: number) {
    this._prodOrderCust.push(new ProductOrderCus(product_id, supplier_id, order_id, comments, customer_id))


  }

  SaveCustomer(customer_id: number,
    customer_name: string,
    customer_phone: number,
    customer_email: string,
    other_customer_details: string) {
    this._customers.push(new Customer(customer_id, customer_name, customer_phone, customer_email, other_customer_details, "1"))
  }




  SaveSupplier(supplier_id: number,
    supplier_name: string,
    other_supplier_details: string, ) {
    this._suppliers.push(new Suppliers(supplier_id, supplier_name, other_supplier_details))
  }

  SaveProduct(product_id: number,
    product_type_code: string,
    supplier_id: number,
    produc_price: number) {
    this._products.push(new Product(product_id, product_type_code, supplier_id, produc_price))
  }

  deleteCustomer(id) {
    console.log(id)
    for (let i = 0; i < this._customers.length; i++) {

      if (this._customers[i].customer_id === id) {
        this._customers.splice(i, 1);
        console.log(".>>>deleted= " + i);
        break;
      }

    }

  }

  deleteSupliers(id) {
    console.log(id)
    for (let i = 0; i < this._suppliers.length; i++) {

      if (this._suppliers[i].supplier_id === id) {
        this._suppliers.splice(i, 1);
        console.log(".>>>deleted= " + i);
        break;
      }

    }

  }

  deleteProducts(id) {
    console.log(id)
    for (let i = 0; i < this._products.length; i++) {

      if (this._products[i].product_id === id) {
        this._products.splice(i, 1);
        console.log(this._products[i].product_id)
        break;
      }

    }

  }
}

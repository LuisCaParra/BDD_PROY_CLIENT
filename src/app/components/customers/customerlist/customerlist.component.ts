import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private authService: AuthService) { }
  users: any;
  name: any;
  phone: any;
  email: any;
  details: any;
  ngOnInit() {
    this.users = this.authService.customers
  }


  display: boolean = false;

  toggleDialog() {
    this.display = !this.display;
  }

  onSave() {
    if (!this.name && !this.phone && !this.email && !this.details)
      console.log('error' + this.name)
    else
      this.authService.SaveCustomer(Date.now(), this.name, this.phone, this.email, this.details)

    this.name = ""
    this.phone = ""
    this.email = ""
    this.details = ""
    this.users = this.authService.customers


    this.toggleDialog()
  }

  onDelete(id) {
    this.authService.deleteCustomer(id)
    console.log("deleted" + id)
    this.users = this.authService.customers
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  constructor(private authService: AuthService) { }
  users: any;
  name: any;
  phone: any;
  email: any;
  details: any;
  ngOnInit() {
    this.users = this.authService.suppliers
    console.log(this.users)
  }


  display: boolean = false;

  toggleDialog() {
    this.display = !this.display;
  }

  onSave() {

    if (!this.name && !this.phone && !this.email && !this.details)
      console.log('error' + this.name)
    else
      this.authService.SaveSupplier(this.authService.suppliers.length + 1, this.name, this.details)

    this.name = ""

    this.details = ""
    this.users = this.authService.suppliers


    this.toggleDialog()
  }


  onDelete(id) {
    this.authService.deleteSupliers(id)
    console.log("deleted" + id)
    this.users = this.authService.suppliers
  }

}

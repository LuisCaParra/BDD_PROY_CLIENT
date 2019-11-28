import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  @Input('isMenuCollapsed') isMenuCollapsed;

  constructor(

    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLogout() {

    this.router.navigate(['/login']);

  }

}

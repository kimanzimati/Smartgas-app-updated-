import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.page.html',
  styleUrls: ['./make-order.page.scss'],
})
export class MakeOrderPage implements OnInit {

  constructor(private router: Router) { }

  makeOrder() {
    this.router.navigate(['make-order']);
  }

  ngOnInit() {
  }

}

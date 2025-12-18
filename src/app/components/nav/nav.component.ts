/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  showMenu = false; 
  counter = 0;
  profile: User | null = null;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private store: StoreService,
    private auth: AuthService
  ) {

  }

  ngOnInit(): void {
    this.store.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }
  

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  login() {
    this.auth.loginAndGet('juan@example.com', '123456')
    .subscribe(user => {
      this.profile = user;
    })
  }



}

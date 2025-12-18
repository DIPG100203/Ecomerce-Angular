/* eslint-disable @angular-eslint/prefer-inject */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from "./components/img/img.component";
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./components/product/product.component";
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./components/products/products.component";
import { NavComponent } from "./components/nav/nav.component";

import { AuthService } from './services/auth/auth.service';
import { UsersService } from './services/users/users.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImgComponent, FormsModule, ProductComponent, CommonModule, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = '';
  token = '';

  constructor(
    private auth: AuthService,
    private users: UsersService
  ) {}
  

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  createUser() {
    this.users.create({
      name: 'Juan', 
      email: 'juan@example.com',
      password: '123456',
      avatar: 'https://i.pravatar.cc/150?img=3'
    })
    .subscribe(rta => {
      console.log(rta);
    })
  }

  
}

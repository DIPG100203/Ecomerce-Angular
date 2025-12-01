import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImgComponent } from "./components/img/img.component";
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./components/product/product.component";
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./components/products/products.component";
import { NavComponent } from "./components/nav/nav.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImgComponent, FormsModule, ProductComponent, CommonModule, ProductsComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = '';
  

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}

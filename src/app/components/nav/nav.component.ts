import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {

  showMenu = false; 
  counter = 0;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private store: StoreService) {

  }

  ngOnInit(): void {
    this.store.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }
  

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }



}

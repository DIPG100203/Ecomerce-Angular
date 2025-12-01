import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = 'https://api.escuelajs.co/api/v1/products';

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) { }

  getAllProducts() {

    return this.http.get<Product[]>(this.API_URL);

  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

  createProduct(data: CreateProductDTO) {
    return this.http.post<Product>(this.API_URL, data)
  }
}

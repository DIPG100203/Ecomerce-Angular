import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User, CreateUserDTO } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // configure your API URL accordingly
  private API_URL = `${environment.APIURL}/api/v1/users`;

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO) {
    return this.http.post(this.API_URL, dto)
  }

  getAll() {
    return this.http.get<User[]>(this.API_URL);
  }
}

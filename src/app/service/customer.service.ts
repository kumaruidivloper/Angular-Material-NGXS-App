import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer-model/customer.model';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) {
  }

  fetchUsers() {
      return this.http.get<Customer[]>('http://localhost:3000/customerDetails');
  }

  selectedUsers(id: number) {
    return this.http.get<Customer[]>(`http://localhost:3000/customerDetails/${id}`);
}

  deleteUser(id: number) {
      return this.http.delete(`http://localhost:3000/customerDetails/${id}`);
  }

  addUser(payload: Customer) {
      return this.http.post<Customer>('http://localhost:3000/customerDetails', payload);
  }

  updateUser(payload: Customer, id: number) {
      return this.http.put<Customer>(`http://localhost:3000/customerDetails/${id}`, payload);
  }
}
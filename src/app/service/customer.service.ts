import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer-model/customer.model';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http: HttpClient) {
  }

  fetchCustomers() {
      return this.http.get<Customer[]>('http://localhost:3000/customerDetails');
  }

  selectedCustomers(id: number) {
    return this.http.get<Customer[]>(`http://localhost:3000/customerDetails/${id}`);
}

  deleteCustomer(id: number) {
      return this.http.delete(`http://localhost:3000/customerDetails/${id}`);
  }

  addCustomer(payload: Customer) {
      return this.http.post<Customer>('http://localhost:3000/customerDetails', payload);
  }

  updateCustomer(payload: Customer, id: number) {
      return this.http.put<Customer>(`http://localhost:3000/customerDetails/${id}`, payload);
  }
}

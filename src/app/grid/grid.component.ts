import { Component, OnInit, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { CustomerState } from './../+state/customer.state';
import { Select, Store } from '@ngxs/store';
import { Customer } from './../customer-model/customer.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable, fromEvent, merge, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DeleteCustomer, GetCustomers, SetSelectedCustomer } from './../+state/customer.actions';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Select(CustomerState.getCutomerList) customers: Observable<Customer[]>;

  displayedColumns: string[] = ['id', 'Address', 'Blog', 'DOB', 'Email', 'FirstName', 'Gender', 'LastName'];
  exampleDatabase: MatTableDataSource<Customer>;
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public gridLength: object;
  public message: string;
  public selectedCustomer: number;
  public selectedId: number;

  filteredData: Customer[] = [];
  renderedData: Customer[] = [];

  constructor(
    private store: Store,
    private router: Router) {
      // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
      // this.dataSource = new MatTableDataSource(users);
}

  ngOnInit() {
    this.customers.subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  });
    this.store.dispatch(new GetCustomers());
  }
}



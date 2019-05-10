import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AddCustomer, SetSelectedCustomer, UpdateCustomer } from './../+state/customer.actions';
import { CustomerState } from './../+state/customer.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store, Selector } from '@ngxs/store';
import { Customer } from './../customer-model/customer.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Select(CustomerState.getSelectedCutomer) selectedCustomer: Observable<Customer>;
  editCustomer = false;
  regiForm: FormGroup;
  FirstName = '';
  LastName = '';
  Address = '';
  DOB: Date = null;
  Gender = '';
  Blog = '';
  Email = '';
  IsAccepted = 0;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.createForm();
  }

  createForm() {
    // To initialize FormGroup
    this.regiForm = this.fb.group({
      FirstName : [null, Validators.required],
      LastName : [null, Validators.required],
      Address : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      DOB : [null, Validators.required],
      Gender: [null, Validators.required],
      Blog: [null, Validators.required],
      Email: [null, Validators.compose([Validators.required, Validators.email])],
      IsAccepted: [null]
    });
  }

  // On Change event of Toggle Button
  onChange(event: any) {
    if (event.checked === true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  // Executed When Form Is Submitted
  // onFormSubmit(form: NgForm)
  // {
  //   console.log(form);
  // }

  onFormSubmit() {
    if (this.editCustomer) {
        this.store.dispatch(new UpdateCustomer(this.regiForm.value, this.regiForm.value.id)).subscribe(() => {
            this.clearForm();
        });
    } else {
        this.store.dispatch(new AddCustomer(this.regiForm.value)).subscribe(() => {
            this.clearForm();
        });
    }
}

  ngOnInit() {

    this.selectedCustomer.subscribe(customer => {
      if (customer) {
          this.regiForm.patchValue({
              id: customer.id,
              Address: customer.Address,
              Blog: customer.Blog,
              DOB: customer.DOB,
              Email: customer.Email,
              FirstName: customer.FirstName,
              Gender: customer.Gender,
              LastName: customer.LastName,
              IsAccepted: customer.IsAccepted
          });
          this.editCustomer = true;
      } else {
          this.editCustomer = false;
      }
  });
  }

  clearForm() {
    this.regiForm.reset();
    this.store.dispatch(new SetSelectedCustomer(null));
 }

}

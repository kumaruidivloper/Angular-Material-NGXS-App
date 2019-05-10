import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Customer } from './../customer-model/customer.model';
import { AddCustomer, DeleteCustomer, GetCustomers, SetSelectedCustomer, UpdateCustomer } from './../+state/customer.actions';
import { CustomerService } from './../service/customer.service';
import { tap } from 'rxjs/operators';

export class CustomerStateModel {
    customers: Customer[];
    selectedCustomer: Customer;
}

@State<CustomerStateModel>({
    name: 'customer',
    defaults: {
        customers: [],
        selectedCustomer: null
    }
})

export class CustomerState {
    constructor(private customerService: CustomerService) {
    }

    @Selector()
    static getCutomerList(state: CustomerStateModel) {
        return state.customers;
    }

    @Selector()
    static getSelectedCutomer(state: CustomerStateModel) {
        return state.selectedCustomer;
    }


    @Action(GetCustomers)
    getCustomers({getState, setState}: StateContext<CustomerStateModel>) {
        return this.customerService.fetchCustomers().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                customers: result,
            });
        }));
    }


    @Action(AddCustomer)
    addCustomer({getState, patchState}: StateContext<CustomerStateModel>, {payload}: AddCustomer) {
        return this.customerService.addCustomer(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                customers: [...state.customers, result]
            });
        }));
    }


    @Action(UpdateCustomer)
    updateUser({getState, setState}: StateContext<CustomerStateModel>, {payload, id}: UpdateCustomer) {
        return this.customerService.updateCustomer(payload, id).pipe(tap((result) => {
            const state = getState();
            const customerList = [...state.customers];
            const customerIndex = customerList.findIndex(item => item.id === id);
            customerList[customerIndex] = result;
            setState({
                ...state,
                customers: customerList,
            });
        }));
    }


    @Action(DeleteCustomer)
    deleteUser({getState, setState}: StateContext<CustomerStateModel>, {id}: DeleteCustomer) {
        return this.customerService.deleteCustomer(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.customers.filter(item => item.id !== id);
            setState({
                ...state,
                customers: filteredArray,
            });
        }));
    }


    @Action(SetSelectedCustomer)
    setSelectedUserId({getState, setState}: StateContext<CustomerStateModel>, {payload}: SetSelectedCustomer) {
        const state = getState();
        setState({
            ...state,
            selectedCustomer: payload
        });
    }
}


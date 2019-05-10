import { Customer } from './../customer-model/customer.model';
export class AddCustomer {
    static readonly type = '[CUSTOMER] Add';

    constructor(public payload: Customer) {
    }
}

export class GetCustomers {
    static readonly type = '[CUSTOMER] Get';
}

export class UpdateCustomer {
    static readonly type = '[CUSTOMER] Update';

    constructor(public payload: Customer, public id: number) {
    }
}

export class DeleteCustomer {
    static readonly type = '[CUSTOMER] Delete';

    constructor(public id: number) {
    }
}

export class SetSelectedCustomer {
    static readonly type = '[CUSTOMER] Set';

    constructor(public payload: Customer) {
    }
}

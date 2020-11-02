import { Customer } from './customer.root.entity';

export interface CustomerRepository {
  findAll(): Promise<Customer[]>;
}

export const CustomerRepositoryToken = 'CustomerRepository';

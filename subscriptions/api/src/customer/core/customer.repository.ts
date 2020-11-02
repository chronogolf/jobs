import { Customer } from './customer.root.entity';

export interface CustomerQueryParams {
  firstName?: string;
  lastName?: string;
}

export interface CustomerRepository {
  findAll(): Promise<Customer[]>;
}

export const CustomerRepositoryToken = 'CustomerRepository';

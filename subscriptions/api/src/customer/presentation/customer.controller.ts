import { Controller, Get, Inject } from '@nestjs/common';
import { Customer, CustomerRepositoryToken, CustomerRepository } from '../core';

@Controller('users')
export class CustomerController {
  constructor(
    @Inject(CustomerRepositoryToken)
    private readonly _repository: CustomerRepository,
  ) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this._repository.findAll();
  }
}

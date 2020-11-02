import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { Customer } from '../core';
import { CustomerRetailAPIRepository } from './customer.retail-api.repository';

describe('CustomerRetailAPIRepository', () => {
  let app: INestApplication;
  let repository: CustomerRetailAPIRepository;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    repository = new CustomerRetailAPIRepository();
  });

  afterAll(async () => {
    await app.close();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    let result: Customer[];
    let retailSpy: jest.SpyInstance;

    /////////////////
    //     TODO    //
    /////////////////
  });
});

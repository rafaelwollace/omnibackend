import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(customerData: Customer): Promise<Customer> {
    // Aqui você pode adicionar lógica extra, como verificar se o CPF ou e-mail já existe
    return this.customerRepository.save(customerData);
  }
}

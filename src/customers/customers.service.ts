import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entity/customers.entity';
import { CreateCustomerDto } from './dto/CreateCustomerDto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  // Método para criar um novo cliente
  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    // Converte a string para Date
    const customerData = {
      ...createCustomerDto,
      birthDate: new Date(createCustomerDto.birthDate), // Converte string para Date
    };

    const customer = this.customerRepository.create(customerData);
    return this.customerRepository.save(customer);
  }

  // Método para listar todos os clientes
  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  // Método para atualizar um cliente
  async update(
    id: number,
    updateCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.customerRepository.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    // Converte a string para Date
    const customerData = {
      ...updateCustomerDto,
      birthDate: new Date(updateCustomerDto.birthDate), // Converte string para Date
    };

    // Atualizar os dados do cliente
    Object.assign(customer, customerData);
    return this.customerRepository.save(customer);
  }

  // Método para excluir um cliente
  async delete(id: number): Promise<void> {
    const result = await this.customerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
  }
}

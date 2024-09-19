import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customers.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(@Body() customerData: Customer) {
    return this.customersService.create(customerData);
  }
}

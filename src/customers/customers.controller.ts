import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { Customer } from './entity/customers.entity';
import { CreateCustomerDto } from './dto/CreateCustomerDto';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso.' })
  @ApiBody({ type: CreateCustomerDto })
  async create(@Body() customerData: CreateCustomerDto) {
    return this.customersService.create(customerData);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes retornada com sucesso.',
    type: [Customer],
  })
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um cliente' })
  @ApiParam({ name: 'id', description: 'ID do cliente a ser atualizado' })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso.' })
  async update(
    @Param('id') id: number,
    @Body() updateCustomerDto: CreateCustomerDto,
  ) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um cliente' })
  @ApiParam({ name: 'id', description: 'ID do cliente a ser excluído' })
  @ApiResponse({ status: 200, description: 'Cliente excluído com sucesso.' })
  async delete(@Param('id') id: number) {
    return this.customersService.delete(id);
  }
}

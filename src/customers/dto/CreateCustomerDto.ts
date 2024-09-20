import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Matches,
  IsInt,
  IsNumberString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty({
    description: 'Nome completo do cliente',
    example: 'Rafael Cunha',
  })
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser um texto.' })
  name: string;

  @ApiProperty({
    description: 'Email do cliente',
    example: 'rafael.cunha@email.com',
  })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  email: string;

  @ApiProperty({
    description: 'Número de telefone do cliente',
    example: '(92) 99999-9999',
  })
  @IsNotEmpty({ message: 'O telefone é obrigatório.' })
  @IsString({ message: 'O telefone deve ser no formato (92) 99999-9999' })
  phone: string;

  @ApiProperty({
    description: 'CPF do cliente, com 11 dígitos',
    example: '12345678901',
  })
  @IsNotEmpty({ message: 'O CPF é obrigatório.' })
  @Matches(/^\d{11}$/, { message: 'CPF deve conter 11 dígitos numéricos.' })
  cpf: string;

  @ApiProperty({
    description: 'Data de nascimento do cliente',
    example: '1990-05-20',
    type: String,
    format: 'date',
  })
  @IsNotEmpty({ message: 'A data de nascimento é obrigatória.' })
  @IsString({
    message: 'A data de nascimento deve ser uma string no formato YYYY-MM-DD.',
  })
  birthDate: string; // Mantém como string para validação

  @ApiProperty({
    description: 'CEP do endereço do cliente',
    example: '69000000',
  })
  @IsNotEmpty({ message: 'O CEP é obrigatório.' })
  @IsNumberString({}, { message: 'O CEP deve ser numérico.' })
  cep: string;

  @ApiProperty({
    description: 'Rua do endereço do cliente',
    example: 'Rua Exemplo',
  })
  @IsNotEmpty({ message: 'A rua é obrigatória.' })
  @IsString({ message: 'A rua deve ser um texto.' })
  street: string;

  @ApiProperty({
    description: 'Número da residência do cliente',
    example: 100,
  })
  @IsNotEmpty({ message: 'O número é obrigatório.' })
  @IsInt({ message: 'O número deve ser um inteiro.' })
  number: number;

  @ApiProperty({
    description: 'Bairro do cliente',
    example: 'Novo Aleixo',
  })
  @IsNotEmpty({ message: 'O bairro é obrigatório.' })
  @IsString({ message: 'O bairro deve ser um texto.' })
  neighborhood: string;

  @ApiProperty({
    description: 'Cidade do cliente',
    example: 'Manaus',
  })
  @IsNotEmpty({ message: 'A cidade é obrigatória.' })
  @IsString({ message: 'A cidade deve ser um texto.' })
  city: string;

  @ApiProperty({
    description: 'Estado do cliente',
    example: 'Amazonas',
  })
  @IsNotEmpty({ message: 'O estado é obrigatório.' })
  @IsString({ message: 'O estado deve ser um texto.' })
  state: string;
}

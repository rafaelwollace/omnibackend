import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  birthDate: Date;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;
}

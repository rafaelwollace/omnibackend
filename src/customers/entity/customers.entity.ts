import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({nullable: false })
  email: string;

  @Column({ nullable: false })
  phone: string;

  @Column({nullable: false })
  cpf: string;

  @Column({ nullable: false, type: 'date' }) // Define o campo como Date no banco
  birthDate: Date;

  @Column({ nullable: false })
  cep: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  neighborhood: string;

  @Column({ nullable: false, type: 'int' })
  number: number;
}

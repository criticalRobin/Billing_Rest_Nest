import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bill } from 'src/bill/bill.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(() => Bill, (bill) => bill.client)
  bills: Bill[];
}

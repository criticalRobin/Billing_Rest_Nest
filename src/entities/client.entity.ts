import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Person } from 'src/entities/person.entity';
import { Bill } from 'src/entities/bill.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  registerDate: Date;

  @Column()
  phone: string;

  @OneToOne(() => Person)
  @JoinColumn()
  person: Person;

  @Column()
  status: boolean;

  @OneToMany(() => Bill, (bill) => bill.client)
  bills: Bill[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Client } from 'src/clients/client.entity';
import { Detail } from 'src/detail/detail.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Client, (client) => client.bills)
  client: Client;

  @OneToMany(() => Detail, (detail) => detail.bill)
  details: Detail[];
}

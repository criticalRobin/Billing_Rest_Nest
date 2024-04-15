import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Client } from 'src/entities/client.entity';
import { Detail } from 'src/entities/detail.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  billNumber: string;

  @Column()
  billDate: Date;

  @Column()
  creationDate: Date;

  @Column()
  authorizationDate: Date;

  @ManyToOne(() => Client, (client) => client.bills)
  client: Client;

  @Column()
  status: boolean;

  @OneToMany(() => Detail, (detail) => detail.bill)
  details: Detail[];
}

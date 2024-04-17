import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Client } from 'src/entities/client.entity';
import { Detail } from 'src/entities/detail.entity';
import { PaymentMethodFactory } from 'src/payment/paymentMethod.factory';

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

  @Column()
  paymentMethod: string;

  @Column()
  subtotal: number;

  @Column()
  total: number;

  async pay(): Promise<void> {
    const paymentMethod = PaymentMethodFactory.createPaymentMethod(
      this.paymentMethod,
    );
    let totalAmount: number;

    if (paymentMethod) {
      totalAmount = await paymentMethod.pay(this.subtotal);
    } else {
      totalAmount = this.subtotal;
    }

    this.total = totalAmount;
  }
}

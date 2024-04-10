import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Bill } from '../bill/bill.entity';

@Entity()
export class Detail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @ManyToOne(() => Bill, (bill) => bill.details)
  bill: Bill;

  @ManyToOne(() => Product)
  product: Product;
}

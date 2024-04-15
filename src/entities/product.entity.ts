import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  unitPrice: number;

  @Column()
  measureUnit: string;

  @Column()
  registerDate: Date;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}

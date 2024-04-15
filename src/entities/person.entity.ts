import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identificationType: string;

  @Column()
  identification: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthdate: Date;
}

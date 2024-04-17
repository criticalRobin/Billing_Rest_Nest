import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from '../entities/bill.entity';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private billRepository: Repository<Bill>,
  ) {}

  async findAll(): Promise<Bill[]> {
    return this.billRepository.find();
  }

  async findOne(id: number): Promise<Bill> {
    return this.billRepository.findOne({ where: { id } });
  }

  async create(bill: Partial<Bill>): Promise<Bill> {
    const newBill = await this.billRepository.create(bill);
    await newBill.pay();
    return this.billRepository.save(newBill);
  }

  async update(id: number, bill: Partial<Bill>): Promise<Bill> {
    await this.billRepository.update(id, bill);
    return this.billRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.billRepository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detail } from '../entities/detail.entity';

@Injectable()
export class DetailService {
  constructor(
    @InjectRepository(Detail)
    private detailRepository: Repository<Detail>,
  ) {}

  async findAll(): Promise<Detail[]> {
    return this.detailRepository.find();
  }

  async findOne(id: number): Promise<Detail> {
    return this.detailRepository.findOne({ where: { id } });
  }

  async create(detail: Partial<Detail>): Promise<Detail> {
    const newDetail = this.detailRepository.create(detail);
    return this.detailRepository.save(newDetail);
  }

  async update(id: number, detail: Partial<Detail>): Promise<Detail> {
    await this.detailRepository.update(id, detail);
    return this.detailRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.detailRepository.delete(id);
  }
}

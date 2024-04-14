import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { DetailService } from './detail.service';
import { Detail } from '../entities/detail.entity';

@Controller('detail')
export class DetailController {
  constructor(private readonly detailService: DetailService) {}

  @Get()
  async findAll(): Promise<Detail[]> {
    return this.detailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Detail> {
    const detail = await this.detailService.findOne(id);
    if (!detail) {
      throw new NotFoundException('Detail does not exist!');
    } else {
      return detail;
    }
  }

  @Post()
  async create(@Body() detail: Detail): Promise<Detail> {
    return this.detailService.create(detail);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() detail: Detail): Promise<any> {
    return this.detailService.update(id, detail);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const detail = await this.detailService.findOne(id);
    if (!detail) {
      throw new NotFoundException('Detail does not exist!');
    }
    return this.detailService.delete(id);
  }
}

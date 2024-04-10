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
import { BillService } from './bill.service';
import { Bill } from './bill.entity';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Get()
  async findAll(): Promise<Bill[]> {
    return this.billService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bill> {
    const bill = await this.billService.findOne(id);
    if (!bill) {
      throw new NotFoundException('Bill does not exist!');
    } else {
      return bill;
    }
  }

  @Post()
  async create(@Body() bill: Bill): Promise<Bill> {
    return this.billService.create(bill);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() bill: Bill): Promise<any> {
    return this.billService.update(id, bill);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const bill = await this.billService.findOne(id);
    if (!bill) {
      throw new NotFoundException('Bill does not exist!');
    }
    return this.billService.delete(id);
  }
}

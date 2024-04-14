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
import { CategoriesService } from './categories.service';
import { Category } from '../entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category> {
    const category = await this.categoryService.findOne(id);
    if (!category) {
      throw new NotFoundException('Category does not exist!');
    } else {
      return category;
    }
  }

  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() category: Category,
  ): Promise<any> {
    return this.categoryService.update(id, category);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const category = await this.categoryService.findOne(id);
    if (!category) {
      throw new NotFoundException('Category does not exist!');
    }
    return this.categoryService.delete(id);
  }
}

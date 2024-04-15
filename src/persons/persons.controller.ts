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
import { PersonsService } from './persons.service';
import { Person } from 'src/entities/person.entity';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Person> {
    const person = await this.personsService.findOne(id);
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return person;
  }

  @Post()
  async create(@Body() person: Partial<Person>): Promise<Person> {
    return this.personsService.create(person);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() person: Partial<Person>,
  ): Promise<Person> {
    const updatedPerson = await this.personsService.update(id, person);
    if (!updatedPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return updatedPerson;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const person = await this.personsService.findOne(id);
    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    } else {
      return this.personsService.delete(id);
    }
  }
}

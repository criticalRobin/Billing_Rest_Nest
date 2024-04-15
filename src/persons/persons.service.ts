import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {}

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: number): Promise<Person> {
    return this.personRepository.findOne({ where: { id } });
  }

  async create(person: Partial<Person>): Promise<Person> {
    const newPerson = this.personRepository.create(person);
    return this.personRepository.save(newPerson);
  }

  async update(id: number, person: Partial<Person>): Promise<Person> {
    await this.personRepository.update(id, person);
    return this.personRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.personRepository.delete(id);
  }
}

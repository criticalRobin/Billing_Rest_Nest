import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entities/person.entity';
import { PersonSingleton } from './persons.singleton';

@Injectable()
export class PersonsService {
  private readonly personSingleton: Person;

  constructor(
    @InjectRepository(Person)
    private personRepository: Repository<Person>,
  ) {
    this.personSingleton = PersonSingleton.getInstance();
  }

  async findAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async findOne(id: number): Promise<Person> {
    return this.personRepository.findOne({ where: { id } });
  }

  // MÉTODO ORIGINAL SIN USAR SINGLETON

  // async create(person: Partial<Person>): Promise<Person> {
  //   const newPerson = this.personRepository.create(person);
  //   return this.personRepository.save(newPerson);
  // }

  // MÉTODO USANDO SINGLETON

  async create(person: Partial<Person>): Promise<Person> {
    const newPerson = this.personSingleton;
    newPerson.identificationType = person.identificationType;
    newPerson.identification = person.identification;
    newPerson.firstName = person.firstName;
    newPerson.lastName = person.lastName;
    newPerson.birthdate = person.birthdate;

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

import { Injectable } from '@nestjs/common';
import { Person } from 'src/entities/person.entity';

@Injectable()
export class PersonSingleton {
  private static instance: Person;

  private constructor() {}

  static getInstance(): Person {
    if (!PersonSingleton.instance) {
      PersonSingleton.instance = new Person();
    } else {
      console.log('PersonSingleton instance already exists');
    }
    return PersonSingleton.instance;
  }
}

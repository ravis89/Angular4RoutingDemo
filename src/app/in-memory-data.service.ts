import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mr. Nice' },
      { id: 2, name: 'Ravi' },
      { id: 3, name: 'Arun' },
      { id: 4, name: 'Preetam' },
      { id: 5, name: 'Test1' },
      { id: 6, name: 'Rubina' },
      { id: 7, name: 'Dyna' },
      { id: 8, name: 'Dr Test' },
      { id: 9, name: 'Manju' },
      { id: 10, name: 'Text' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


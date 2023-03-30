import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Hulk' },
      { id: 13, name: 'Superman' },
      { id: 14, name: 'Eltiraflechas' },
      { id: 15, name: 'Capitanga America' },
      { id: 16, name: 'Scarlett Johanson' },
      { id: 17, name: 'Ironmandingo' },
      { id: 18, name: 'Tordo Raro' },
      { id: 19, name: 'Elbuenaonda' },
      { id: 20, name: 'Tornado' },
      { id: 21, name: 'Elemental Hero Neos'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
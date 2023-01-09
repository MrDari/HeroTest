import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes: Hero[] = [
    { id: 1, nombre: 'Spiderman', company: 'Marvel' },
    { id: 2, nombre: 'Hulk', company: 'Marvel' },
    { id: 3, nombre: 'Aquaman', company: 'DC' },
  ];
  private heroesFiltered: Hero[] = [];

  constructor(private http: HttpClient) {}

  public getHeroes() {
    return this.heroes;
  }

  public getHero(id: any) {
    let item: Hero = this.heroes[this.heroes.findIndex((i) => i.id == id)];
    return item;
  }

  public searchHeroes(cadena: any) {
    this.heroesFiltered = this.heroes.filter((i) => i.nombre.includes(cadena));
    return this.heroesFiltered;
  }

  public addHero(hero: any) {
    let lastId = this.heroes.slice(-1)[0].id;
    this.heroes.push({
      id: lastId + 1,
      nombre: hero.nombre,
      company: hero.company,
    });
  }

  public editHero(heroEdited: any) {
    this.heroes[this.heroes.findIndex((i) => i.id == heroEdited.id)] =
      heroEdited;
  }

  public deleteHero(id: number) {
    this.heroes = this.heroes.filter((i) => i.id !== id);
  }
}

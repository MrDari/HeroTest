import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private api: string = 'http://localhost:3000/heroes';
  private heroes: Hero[] = [
    { id: 1, nombre: 'Spiderman', company: 'Marvel' },
    { id: 2, nombre: 'Hulk', company: 'Marvel' },
    { id: 3, nombre: 'Aquaman', company: 'DC' },
  ];

  private heroesFiltered: Hero[] = [];

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<any> {
    return this.http.get<Hero>(this.api);
  }

  public getHero(id: any): Observable<any> {
    return this.http.get<Hero>(`${this.api}/${id}`);
  }



  public addHero(hero: any): Observable<any> {
    return this.http.post<Hero>(this.api, hero, httpOptions);
  }

  public editHero(heroEdited: any): Observable<any> {
    return this.http.put<Hero>(
      `${this.api}/${heroEdited.id}`,
      heroEdited,
      httpOptions
    );
  }

  public deleteHero(id: number): Observable<any> {
    return this.http.delete<Hero>(this.api + '/' + id, {});
  }
}

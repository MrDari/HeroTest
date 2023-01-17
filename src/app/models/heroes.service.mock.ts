import { of } from 'rxjs';

export class HeroesServiceMock {
  getHeroes() {
    return of([
      {
        "id": 1,
        "nombre": "Spiderman",
        "company": "DC"
      },
      {
        "nombre": "IronMan",
        "company": "Marvel",
        "id": 2
      },
      {
        "nombre": "Aquaman",
        "company": "DC",
        "id": 3
      },
      {
        "nombre": "Batman",
        "company": "DC",
        "id": 4
      },
      {
        "nombre": "AntMan",
        "company": "Marvel",
        "id": 5
      },
      {
        "id": 6,
        "nombre": "Hulk",
        "company": "DC"
      }
    ]);
  }
  getHero(id: number) {
    return of(
      {
        "id": 1,
        "nombre": "Spiderman",
        "company": "DC"
      },)
}

addHero(hero: any) {
  return of(
    {
      "id": 3,
      "nombre": "Thor",
      "company": "Marvel"
    },)
}

deleteHero(id: number) {
  return of(
    {

    },)
}
}

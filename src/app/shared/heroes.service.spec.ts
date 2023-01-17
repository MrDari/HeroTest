import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpClientSpy: {
    get: jasmine.Spy;
    post: jasmine.Spy;
    delete: jasmine.Spy;
    put: jasmine.Spy
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put'

    ]);
    service = new HeroesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia retornar el array de heroes ', (done: DoneFn) => {
    //TODO: Mock de datos!
    const mockResultGet = [
      {
        id: 1,
        nombre: 'Spiderman',
        company: 'DC',
      },
      {
        nombre: 'IronMan',
        company: 'Marvel',
        id: 2,
      },
      {
        nombre: 'Aquaman',
        company: 'DC',
        id: 3,
      },
      {
        nombre: 'Batman',
        company: 'DC',
        id: 4,
      },
      {
        nombre: 'AntMan',
        company: 'Marvel',
        id: 5,
      },
      {
        nombre: 'Hulk',
        company: 'Marvel',
        id: 6,
      },
    ];

    httpClientSpy.get.and.returnValue(of(mockResultGet)); //TODO: Observable!

    service.getHeroes().subscribe((resultado) => {
      //TODO: No se sabe el tiempo
      expect(resultado).toEqual(mockResultGet);
      done();
    });
  });

  it('Deberia retornar objecto creado', (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockHero = {
      //TODO: Exito!
      nombre: 'superman',
      company: 'DC',
    };

    const mockResultHero = {
      id: 8,
      nombre: 'superman',
      company: 'DC',
    };

    httpClientSpy.post.and.returnValue(of(mockResultHero)); //TODO: Observable!

    //TODO: Act

    const hero = mockHero;

    service.addHero(hero).subscribe((resultado) => {
      //TODO: No se sabe el tiempo
      expect(resultado).toEqual(mockResultHero);
      done();
    });
  });

  it('Deberia retornar objecto vacio luego de eliminar', (done: DoneFn) => {
    //TODO: Mock de datos!

    const mockResultHero = {};

    httpClientSpy.delete.and.returnValue(of(mockResultHero)); //TODO: Observable!

    //TODO: Act

    const id = 1;

    service.deleteHero(id).subscribe((resultado) => {
      //TODO: No se sabe el tiempo
      expect(resultado).toEqual(mockResultHero);
      done();
    });
  });

  it('Deberia retornar objecto actualizado luego de editar', (done: DoneFn) => {

    const mockHero = {
      //TODO: Exito!
      id: 6,
      nombre: 'Hulk',
      company: 'DC',
    };
    //TODO: Mock de datos!

    const mockResultHero = {
      id: 6,
      nombre: 'Hulk',
      company: 'DC',
    };

    httpClientSpy.put.and.returnValue(of(mockResultHero)); //TODO: Observable!

    //TODO: Act

    const hero = mockHero;

    service.editHero(mockHero).subscribe((resultado) => {
      //TODO: No se sabe el tiempo
      expect(resultado).toEqual(mockResultHero);
      done();
    });
  });
});

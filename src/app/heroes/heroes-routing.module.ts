import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearHeroeComponent } from './crear-heroe/crear-heroe.component';
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  },
  {
    path: 'heroes/crear',
    component: CrearHeroeComponent,
    loadChildren: () =>
    import('./crear-heroe/crear-heroe.module').then(
      (m) => m.CrearHeroeModule
      ),
    },
    {
    path: 'heroes/editar/:id',
    component: EditarHeroeComponent,
    loadChildren: () =>
    import('./editar-heroe/editar-heroe.module').then(
      (m) => m.EditarHeroeModule
      ),
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  ];

  @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}

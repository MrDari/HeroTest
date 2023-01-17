import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearHeroeComponent } from './crear-heroe/crear-heroe.component';
import { EditarHeroeComponent } from './editar-heroe/editar-heroe.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'heroes', component: HeroesComponent },
      { path: 'heroes/crear', component: CrearHeroeComponent },
      { path: 'heroes/editar/:id', component: EditarHeroeComponent },
      { path: '**', redirectTo: '/heroes', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}

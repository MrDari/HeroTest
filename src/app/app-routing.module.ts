import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHeroeComponent } from './heroes/crear-heroe/crear-heroe.component';
import { EditarHeroeComponent } from './heroes/editar-heroe/editar-heroe.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then((m) => m.HeroesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

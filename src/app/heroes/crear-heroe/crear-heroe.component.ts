import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/shared/heroes.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-crear-heroe',
  templateUrl: './crear-heroe.component.html',
  styleUrls: ['./crear-heroe.component.css']
})
export class CrearHeroeComponent {
  heroForm = this.fb.group({
    nameFormControl : new FormControl('', [Validators.required]),
    companyFormControl: new FormControl ('', [Validators.required])
  })
  constructor (
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  addHero(){
    if(this.heroForm.valid){
      let hero = {
        nombre: this.heroForm.value.nameFormControl,
        company: this.heroForm.value.companyFormControl

      }
      this.heroesService.addHero(hero).subscribe(data => {

        console.log(data)
      })
      this.router.navigate(['/']).then(() => {
        this.router.navigate(['/heroes'])
      })
    }
  }
}

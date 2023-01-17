import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/shared/heroes.service';

@Component({
  selector: 'app-editar-heroe',
  templateUrl: './editar-heroe.component.html',
  styleUrls: ['./editar-heroe.component.css'],
})
export class EditarHeroeComponent {
  hero: Hero = {
    id: 0,
    nombre: '',
    company: '',
  };

  heroForm: FormGroup = new FormGroup({});

  constructor(
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit():void {
    this.heroForm = this.fb.group({
      nameFormControl: new FormControl('', [Validators.required]),
      companyFormControl: new FormControl('', [Validators.required]),
    });

    let id = this.route.snapshot.params['id'];
    this.heroesService.getHero(id).subscribe((data) => {
      this.hero = data;
      this.heroForm.setValue({
        nameFormControl: this.hero.nombre,
        companyFormControl: this.hero.company,
      });
    });
  }

  editHero():void {
    if (this.heroForm.valid) {
      let heroEdited = {
        id: this.hero.id,
        nombre: this.heroForm.value.nameFormControl,
        company: this.heroForm.value.companyFormControl,
      };
      this.heroesService.editHero(heroEdited).subscribe((data) => {});
      this.router.navigate(['/']).then(() => {
        this.router.navigate(['/heroes']);
      });
    }
  }
}

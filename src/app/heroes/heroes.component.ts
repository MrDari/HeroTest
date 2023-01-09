import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { Hero } from '../models/hero';
import { HeroesService } from '../shared/heroes.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  displayedColumns: string[] = ['id', 'nombre', 'company', 'action'];
  dataSource!: MatTableDataSource<Hero>;
  heroesFiltered: Hero[] = [];


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private heroesService: HeroesService,
    private dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.heroesService.getHeroes());

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.heroesFiltered = this.heroesService.searchHeroes(filterValue);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    if (this.heroesFiltered.length > 0) {
      this.dataSource.data = this.heroesFiltered;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  deleteHero(id: number) {
    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (true) {
        this.heroesService.deleteHero(id);
        this.dataSource.data = this.heroesService.getHeroes();
      }
    });
  }
}
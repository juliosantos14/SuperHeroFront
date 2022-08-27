import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/_models/super-hero';
import { SuperHeroService } from 'src/app/_services/super-hero.service';

@Component({
  selector: 'app-superhero-edit',
  templateUrl: './superhero-edit.component.html',
  styleUrls: ['./superhero-edit.component.css']
})
export class SuperheroEditComponent implements OnInit {

  @Input() hero?: SuperHero;
  @Output() retornarListaHeroes = new EventEmitter();
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();


  constructor(private superHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  createHero(hero: SuperHero){
    this.superHeroService.createSuperHeroes(hero).subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
    location.reload();
  }

  updateHero(hero: SuperHero){
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes))

      location.reload();
  }

  deleteHero(hero: SuperHero){
    this.superHeroService.deleteSuperHeroes(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes))
  }

  listaHeroes(){
    this.retornarListaHeroes.emit();
  }

}

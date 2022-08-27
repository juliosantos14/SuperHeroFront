import { Component, EventEmitter, Output } from '@angular/core';
import { SuperHero } from '../../_models/super-hero';
import { SuperHeroService } from '../../_services/super-hero.service';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})

export class SuperHeroComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  lista = true;

  constructor (private superHeroService : SuperHeroService){}

  ngOnInit() : void{
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));

      console.log(this.obterTodos())
  }

  obterTodos(){
   this.lista=true;
   this.superHeroService.getSuperHeroes().subscribe(heroes => {
    this.heroes = heroes;
   })
  }

  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }

  initNewHero(){
    this.heroToEdit = new SuperHero();
    this.lista = false;
  }

  editHero(hero: SuperHero){
    this.heroToEdit = hero;
    this.lista = false;
  }

  deleteHero(hero: SuperHero){
    this.superHeroService.deleteSuperHeroes(hero).subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes))
    location.reload();
  }
}

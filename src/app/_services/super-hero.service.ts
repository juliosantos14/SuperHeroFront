import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { SuperHero } from '../_models/super-hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero";

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/api/${this.url}`);
  }

  public updateHero(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/api/${this.url}`, hero);
  }

  public createSuperHeroes(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/api/${this.url}`, hero);
  }

  public deleteSuperHeroes(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/api/${this.url}/${hero.id}`);
  }
}

import { Component, VERSION } from '@angular/core';
import { take } from 'rxjs';
import { PokeService } from './shared/services/poke.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private pokeService: PokeService) {
    this.pokeService
      .getPokemon()
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemon', val));
    this.pokeService
      .getPokemonByName('bulbasaur')
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonByName', val));
    this.pokeService
      .getPokemonById(136)
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonById', val));
    this.pokeService
      .getPokemonSorted('asc')
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonSorted Asc', val));
    this.pokeService
      .getPokemonSorted('desc')
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonSorted Desc', val));
    this.pokeService
      .getPokemonSorted()
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonSorted No Params', val));
    this.pokeService
      .getShortInfoByName('bulbasaur')
      .pipe(take(1))
      .subscribe((val) => console.log('getShortInfoByName', val));
    this.pokeService
      .getPokemonAbilities()
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonAbilities', val));
    this.pokeService
      .getPokemonAbilityByName('stench')
      .pipe(take(1))
      .subscribe((val) => console.log('getPokemonAbilityByName', val));
  }
}

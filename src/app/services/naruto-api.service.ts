import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NarutoCharacter } from '../interfaces/naturo-character.interface';

@Injectable({
  providedIn: 'root'
})
export class NarutoApiService {

  #url = 'https://naruto-br-api.site/characters';
  #httpClient = inject(HttpClient);

  
  #setCharacters = signal<NarutoCharacter[] | null>(null);
  get getCharacters() {
    return this.#setCharacters.asReadonly();
  }

  public HttpGetAllCharacters$() : Observable<NarutoCharacter[]> {
    this.#setCharacters.set(null);

    return this.#httpClient.get<NarutoCharacter[]>(this.#url).pipe(
      tap((response: NarutoCharacter[]) => this.#setCharacters.set(response)),
      tap(response=>console.log(response))
    );
  }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { NarutoApiService } from '../../services/naruto-api.service';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SearchComponent } from "../search/search.component";
import { NarutoCharacter } from '../../interfaces/naturo-character.interface';

@Component({
  selector: 'app-list-items',
  imports: [SearchComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
  animations: [
    trigger('fade-in', [
      transition(':enter', [
        style({ opacity: 0.1 }),
        animate('500ms')
      ])
    ]),
    trigger('rotate-icon', [
      transition('* => *', [
        animate('5s', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(360deg)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class ListItemsComponent implements OnInit {
  #narutoCharactersApi = inject(NarutoApiService);

  public getCharacters = this.#narutoCharactersApi.getCharacters;
  public characters = signal<NarutoCharacter[] | null>(null);
  
  ngOnInit(): void {
    this.#narutoCharactersApi.HttpGetAllCharacters$().subscribe(
      (characters) => {
        this.characters.set(characters);
      }
    );
  }

  public getSearch(inputSearch: string) {
    if (inputSearch === '') {
      this.characters.set(this.getCharacters());
      return;
    }

    const filter = this.getCharacters()?.filter((character) => {
      return character.name.toLowerCase().includes(inputSearch.toLowerCase()) || character.village.name.toLowerCase().includes(inputSearch.toLowerCase());
    });

    this.characters.set(filter ?? null);
  }
}

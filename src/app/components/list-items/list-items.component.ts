import { Component, inject, OnInit } from '@angular/core';
import { NarutoApiService } from '../../services/naruto-api.service';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
})
export class ListItemsComponent implements OnInit {
  #narutoCharactersApi = inject(NarutoApiService);

  public getCharacters = this.#narutoCharactersApi.getCharacters;
  
  ngOnInit(): void {
    this.#narutoCharactersApi.HttpGetAllCharacters$().subscribe();
  }
}

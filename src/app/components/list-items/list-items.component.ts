import { Component, inject, OnInit } from '@angular/core';
import { NarutoApiService } from '../../services/naruto-api.service';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
  animations: [
    trigger('fade-in', [
      transition(':enter', [
        style({ opacity: 0.1 }),
        animate('5s')
      ])
    ]),
    trigger('rotate-img', [
      transition('* => *', [
        animate('5s infinite', keyframes([
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
  
  ngOnInit(): void {
    this.#narutoCharactersApi.HttpGetAllCharacters$().subscribe();
  }
}

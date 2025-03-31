import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NarutoApiService } from '../../services/naruto-api.service';
import { NarutoCharacter } from '../../interfaces/naturo-character.interface';

@Component({
  selector: 'app-detail',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  
  #activatedRoute = inject(ActivatedRoute);
  #narutoCharactersApi = inject(NarutoApiService);

  public character = signal<NarutoCharacter | null>(null);

  ngOnInit(): void {
    const id = this.#activatedRoute.snapshot.params['id'];
    this.#narutoCharactersApi.HttpGetCharacterById$(id).subscribe(
      (character) => {
        this.character.set(character);
      }
    );
  }
}

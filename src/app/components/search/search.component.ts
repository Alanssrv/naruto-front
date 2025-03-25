import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter<string>();
  
  public search(value: string): void {
    this.emmitSearch.emit(value);
  }
}

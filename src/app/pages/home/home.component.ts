import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ListItemsComponent } from "../../components/list-items/list-items.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ListItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}

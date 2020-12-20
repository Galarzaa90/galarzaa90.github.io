import { Component } from '@angular/core';
import { profile } from './data/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'galarzaa';
  profile = profile;
}

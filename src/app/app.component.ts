import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SimpleIcon } from 'simple-icons';
import { profile } from './data/profile';
const python: SimpleIcon = require('simple-icons/icons/python');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'galarzaa';
  profile = profile;
  hover = {};
  python = python;

  constructor(public sanitizer: DomSanitizer) {
    console.log(python);
  }

  toColor(hex: string): string {
    return `#${hex}`;
  }
}

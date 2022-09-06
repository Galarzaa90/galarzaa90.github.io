import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  profile = profile;
  hover: { [name: string]: boolean } = {};
  constructor(public sanitizer: DomSanitizer) {
  }


  ngOnInit(): void {
  }

  toColor(hex: string): string {
    return `#${hex}`;
  }

}

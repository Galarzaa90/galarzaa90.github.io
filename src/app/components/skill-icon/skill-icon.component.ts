import { Component, Input, OnInit } from '@angular/core';
import { SkillIcon } from 'src/app/data/profile';

@Component({
  selector: 'app-skill-icon[skill]',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss']
})
export class SkillIconComponent implements OnInit {
  @Input() skill: SkillIcon | null = null;
  hover = false;

  constructor() { }

  ngOnInit(): void {
  }

  toColor(hex: string): string {
    return `#${hex}`;
  }

}

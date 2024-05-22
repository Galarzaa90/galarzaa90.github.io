import { Component, Input, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { SkillIcon } from 'src/app/data/profile';

@Component({
  selector: 'app-skill-icon[skill]',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.scss'],
  standalone: true,
  imports: [MatTooltip]
})
export class SkillIconComponent implements OnInit {
  @Input() skill: SkillIcon | null = null;
  @Input() tooltip = true;
  hover = false;

  constructor() { }

  ngOnInit(): void {
  }

  toColor(hex: string): string {
    return `#${hex}`;
  }

}

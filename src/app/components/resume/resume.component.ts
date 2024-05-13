import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { profile } from '../../data/profile';
import { EducationComponent } from '../education/education.component';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { MatChipListbox, MatChip } from '@angular/material/chips';
import { ProjectComponent } from '../projects/projects.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { PrintableComponent } from '../printable/printable.component';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    standalone: true,
    imports: [PrintableComponent, MatToolbar, MatCard, MatCardContent, NgFor, FaIconComponent, WorkExperienceComponent, ProjectComponent, MatChipListbox, MatChip, NgIf, SkillIconComponent, EducationComponent]
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

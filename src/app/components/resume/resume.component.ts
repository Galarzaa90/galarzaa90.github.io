import { Component, OnInit } from '@angular/core';
import { MatChip, MatChipListbox, MatChipOption, MatChipSet } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { profile } from '../../data/profile';
import { EducationComponent } from '../education/education.component';
import { ProjectComponent } from '../projects/projects.component';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

import { MatCard, MatCardContent } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { PrintableComponent } from '../printable/printable.component';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    imports: [
        EducationComponent,
        FaIconComponent,
        MatCard,
        MatCardContent,
        MatChip,
        MatChipListbox,
        MatChipOption,
        MatChipSet,
        MatToolbar,
        PrintableComponent,
        ProjectComponent,
        SkillIconComponent,
        WorkExperienceComponent,
    ]
})
export class ResumeComponent implements OnInit {

  profile = profile;

  skillTypes = ['All', ...Array.from(new Set(this.profile.skills.map(skill => skill.type)))];


  selectedSkillTypes = new Set(this.skillTypes);

  get selectedSkills() {
    return profile.skills.filter(s => this.selectedSkillTypes.has(s.type))
  }

  hover: { [name: string]: boolean } = {};
  constructor(public sanitizer: DomSanitizer) {
  }


  ngOnInit(): void {
  }

  toColor(hex: string): string {
    return `#${hex}`;
  }

  toggleSelection(skillType: string): void {
    if (skillType === 'All') {
      this.toggleAll();
    } else {
      if (this.selectedSkillTypes.has(skillType)) {
        this.selectedSkillTypes.delete(skillType);
      } else {
        this.selectedSkillTypes.add(skillType);
      }
      this.updateAllSelection();
    }
  }

  isSelected(skillType: string): boolean {
    return this.selectedSkillTypes.has(skillType);
  }

  toggleAll(): void {
    if (this.isAllSelected()) {
      this.selectedSkillTypes.clear();
    } else {
      this.skillTypes.forEach(type => this.selectedSkillTypes.add(type));
    }
  }

  isAllSelected(): boolean {
    return this.skillTypes.every(type => this.selectedSkillTypes.has(type));
  }

  updateAllSelection(): void {
    if (this.skillTypes.slice(1).every(type => this.selectedSkillTypes.has(type))) {
      this.selectedSkillTypes.add('All');
    } else {
      this.selectedSkillTypes.delete('All');
    }
  }

  trackBySkillType(index: number, skillType: string): string {
    return skillType;
  }

}

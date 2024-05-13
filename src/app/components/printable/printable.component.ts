import { Component, OnInit } from '@angular/core';
import { faMapPin, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { profile, Skill, SkillIcon } from '../../data/profile';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-printable',
    templateUrl: './printable.component.html',
    styleUrls: ['./printable.component.scss'],
    standalone: true,
    imports: [FaIconComponent, NgFor, NgIf, SkillIconComponent, DatePipe]
})
export class PrintableComponent implements OnInit {
  profile = profile;
  faMapPin = faMapPin;
  faGlobe = faGlobe;
  constructor() { }

  ngOnInit(): void {
  }

  joinSkillIcons(skills: SkillIcon[]): string {
    return skills.map(s => s.text).join(' | ');
  }

  joinSkills(skills: Skill[]): string {
    return skills.map(s => s.name).join(' | ');
  }

}

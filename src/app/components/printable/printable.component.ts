import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGlobe, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { Skill, SkillIcon, profile } from '../../data/profile';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';

@Component({
  selector: 'app-printable',
  templateUrl: './printable.component.html',
  styleUrls: ['./printable.component.scss'],
  standalone: true,
  imports: [FaIconComponent, SkillIconComponent, DatePipe]
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

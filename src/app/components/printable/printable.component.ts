import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { profile, Skill, SkillIcon } from '../../data/profile';

@Component({
  selector: 'app-printable',
  templateUrl: './printable.component.html',
  styleUrls: ['./printable.component.scss']
})
export class PrintableComponent implements OnInit {
  profile = profile;
  faEnvelope = faEnvelope;
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

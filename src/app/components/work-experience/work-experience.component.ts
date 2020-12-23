import { Component, Input, OnInit } from '@angular/core';
import { JobEntry } from 'src/app/data/profile';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() entries: Array<JobEntry> = [];

  constructor() { }

  ngOnInit(): void {
  }
}

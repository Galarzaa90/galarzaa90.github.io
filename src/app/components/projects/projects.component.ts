import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/data/profile';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() projects: Array<Project> = [];
  constructor() { }

  ngOnInit(): void {
  }

}

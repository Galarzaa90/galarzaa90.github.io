import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Project } from 'src/app/data/profile';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, SkillIconComponent, AsyncPipe, DatePipe]
})
export class ProjectComponent implements OnInit {
  @Input() projects: Array<Project> = [];

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLarge$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}

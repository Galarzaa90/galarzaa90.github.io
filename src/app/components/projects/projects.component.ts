import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Project } from 'src/app/data/profile';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    SkillIconComponent,
    AsyncPipe,
    DatePipe,
    MatTooltipModule,
  ]
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintableComponent } from './components/printable/printable.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: ResumeComponent},
  { path: 'print', component: PrintableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

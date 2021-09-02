import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'students', component: StudentsComponent},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

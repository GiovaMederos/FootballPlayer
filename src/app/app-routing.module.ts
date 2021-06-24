import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';


const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

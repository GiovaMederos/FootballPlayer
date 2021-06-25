import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent, } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { IndividualLeagueComponent } from './individual-league/individual-league.component';
import { IndividualPlayerComponent } from './individual-player/individual-player.component';
import { IndividualTeamComponent } from './individual-team/individual-team.component';


const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'leagues', component: LeaguesComponent
  },
  {
    path: 'players', component: PlayersComponent
  },
  {
    path: 'teams', component: TeamsComponent
  },
  {
    path: 'leagues/:leagueName', component: IndividualLeagueComponent
  },
  {
    path: 'players/:playerName', component: IndividualPlayerComponent
  },
  {
    path: 'teams/:teamName', component: IndividualTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

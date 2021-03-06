import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { IndividualLeagueComponent } from './individual-league/individual-league.component';
import { IndividualPlayerComponent } from './individual-player/individual-player.component';
import { IndividualTeamComponent } from './individual-team/individual-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    PlayersComponent,
    LeaguesComponent,
    IndividualLeagueComponent,
    IndividualPlayerComponent,
    IndividualTeamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as AllIcons from '@ant-design/icons-angular/icons';

// import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

// import { NzDemoMenuInlineCollapsedComponent } from './app.component';


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
    NzButtonModule,
    MenubarModule,
    // DemoNgZorroAntdModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ApiService: ApiService) {}

  public playerList: any[] = [];
  public teamList: any [] = [];
  public leagueList: any[] = [];

  ngOnInit(): void {
  }

  showPlayers() {
    this.ApiService.getPlayers().then(res => {this.playerList= res; return this.playerList});
  }

  showTeams() {
    this.ApiService.getTeams().then(res => {this.teamList= res; return this.teamList});
  }

  showLeagues() {
    this.ApiService.getLeagues().then(res => {this.leagueList= res; return this.leagueList});
  }
}

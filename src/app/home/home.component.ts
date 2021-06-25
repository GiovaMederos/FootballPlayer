import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  items: MenuItem[] | undefined;
  public playerList: any[] = [];
  public teamList: any [] = [];
  public leagueList: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {

    this.items = [
      {label: "Jugadores", routerLink: ['/players']},
      {label: "Equipos", routerLink: ['/teams']},
      {label: "Ligas", routerLink: ['/leagues']},
    ]
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

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

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
    this.ApiService.getTeams().then(res => {console.log(res)});
  }

  showLeagues() {
    this.ApiService.getLeagues().then(res => {console.log(res)});
  }
}

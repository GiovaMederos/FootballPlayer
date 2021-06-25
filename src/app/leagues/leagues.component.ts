import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  public leagueList: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.showLeagues()
  }

  showLeagues() {
    this.ApiService.getLeagues().then(res => {
      this.leagueList= res;
      return this.leagueList});
  }
}

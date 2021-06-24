import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-individual-league',
  templateUrl: './individual-league.component.html',
  styleUrls: ['./individual-league.component.css']
})
export class IndividualLeagueComponent implements OnInit {

  public teamsList: any[] = [];
  public leagueName = this.route.snapshot.paramMap.get('leagueName');
  public league: any;

  constructor(private ApiService: ApiService,
              private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getLeague()
  }

  getLeague() {
    this.ApiService.getLeagues().then(res =>{
      this.league = res.find(league => league['Nombre De La Liga'] === this.leagueName)
      this.showTeams()
    })
  }

  showTeams() {
    this.ApiService.getTeams().then(res => {
      this.teamsList= res.filter(teams => teams.Liga === this.league.Identificador);
      return this.teamsList});
  }

}

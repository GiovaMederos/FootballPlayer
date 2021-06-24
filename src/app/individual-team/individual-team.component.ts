import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersComponent } from '../players/players.component';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-individual-team',
  templateUrl: './individual-team.component.html',
  styleUrls: ['./individual-team.component.css']
})
export class IndividualTeamComponent implements OnInit {

  public team : string;
  public playersList: any[] = [];
  public teamName = this.route.snapshot.paramMap.get('teamName');
  public player= "";


  constructor(private ApiService: ApiService,
              private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.ApiService.getTeams().then(res =>{
    this.team = res.find(team => team['Nombre del equipo'] === this.teamName)
    this.showPlayers()
    })
  }

  // getPlayers() {
  //   this.ApiService.getPlayers().then(res => {
  //   this.playersList= res.filter(players => players.teamId === this.player.id);
  //   return this.playersList});
  // }

}

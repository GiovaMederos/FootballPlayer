import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teamsList: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.showTeams()
  }

  showTeams() {
    this.ApiService.getTeams().then((res: any) => {this.teamsList= res; return this.teamsList});
  }

}

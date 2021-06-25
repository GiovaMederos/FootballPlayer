import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public playersList: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.showPlayers()
  }

  showPlayers() {
    this.ApiService.getPlayers().then((res: any) => {this.playersList= res; return this.playersList});
  }
}

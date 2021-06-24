import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-individual-player',
  templateUrl: './individual-player.component.html',
  styleUrls: ['./individual-player.component.css']
})
export class IndividualPlayerComponent implements OnInit {

  public playerName = this.route.snapshot.paramMap.get('playerName');
  public player : any;
  constructor(private ApiService: ApiService,
              private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getPlayer()
  }

  getPlayer() {
    this.ApiService.getPlayers().then(res =>{
    this.player = res.find(player => player['Nombre del Jugador'] ===
    this.playerName)
    })
  }

}

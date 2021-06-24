import { Injectable } from '@angular/core';
import axios from '../../../node_modules/axios';
import { Leagues } from '../interfaces/leagues';
import { Players } from '../interfaces/players';
import { Teams } from '../interfaces/teams';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() {}

    //Aquí tenemos 3 funciones, cada una extrae toda la info de cada categoría

    getPlayers(): Promise<Players[]>{
      return axios.get("https://footbal-api.herokuapp.com/players").then(response => response.data);
    }

    getTeams(): Promise<Teams[]>{
      return axios.get("https://footbal-api.herokuapp.com/teams").then(response => response.data);
    }

    getLeagues(): Promise<Leagues[]>{
        return axios.get("https://footbal-api.herokuapp.com/leagues").then(response => response.data);
      }

}

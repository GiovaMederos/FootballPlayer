import { Injectable } from '@angular/core';
import axios from '../../../node_modules/axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() {}

    //Aquí tenemos 3 funciones, cada una extrae toda la info de cada categoría

    getPlayers(): Promise<any>{
      return axios.get("https://footbal-api.herokuapp.com/players").then(response => response.data);
    }

    getTeams(): Promise<any>{
      return axios.get("https://footbal-api.herokuapp.com/teams").then(response => response.data);
    }

    getLeagues(): Promise<any>{
        return axios.get("https://footbal-api.herokuapp.com/leagues").then(response => response.data);
      }

}

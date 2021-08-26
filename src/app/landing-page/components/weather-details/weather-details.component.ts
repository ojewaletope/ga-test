import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  weatherDetails$: Observable<any> | undefined;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.weatherDetails$ = this.apiService.getWeatherDetails()
  }

}

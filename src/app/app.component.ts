import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "./core/services/weather.service";
import {Weather} from "./core/interfaces/weather.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'pokemon-challenge-front';
  weather: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getWeatherByCity("paris").subscribe((result) => {
      this.weather = result
    })
  }

  ngOnDestroy(): void {

  }
}

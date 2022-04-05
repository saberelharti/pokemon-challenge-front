import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "./core/services/weather.service";
import {Weather} from "./core/interfaces/weather.interface";
import {catchError, Observable, take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  city: string;
  weather: Weather;
  hasError: boolean = false;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  getWeather() {
    this.weatherService.getWeatherByCity(this.city)
      .pipe(take(1), catchError((err, caught) => {
        this.hasError = true
        return caught as Observable<Weather>
      })).subscribe((result) => {
      this.weather = result
    })
  }
}

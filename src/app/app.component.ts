import {Component} from '@angular/core';
import {WeatherService} from "./core/services/weather.service";
import {Weather} from "./core/interfaces/weather.interface";
import {catchError, of, take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  city: string;
  weather: Weather;
  hasError: boolean = false;
  isLoading: boolean = false;

  constructor(private weatherService: WeatherService) {
  }

  getWeather() {
    this.isLoading = true;
    this.weatherService.getWeatherByCity(this.city)
      .pipe(take(1), catchError((err, caught) => {
        this.hasError = true;
        this.isLoading = false;
        return of({} as Weather);
      })).subscribe((result) => {
      this.weather = result
      this.isLoading = false;
    })
  }
}

import {Component} from '@angular/core';
import {WeatherService} from "./core/services/weather.service";
import {Weather} from "./core/interfaces/weather.interface";
import {catchError, of, take} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  city: string;
  weather: Weather;
  isLoading: boolean = false;

  constructor(private weatherService: WeatherService, private snackBar: MatSnackBar) {
  }

  getWeather() {

    if (this.city.length == 0)
      return

    this.isLoading = true;
    this.weatherService.getWeatherByCity(this.city)
      .pipe(take(1), catchError((err, caught) => {
        this.snackBar.open("City not found!", "", {
          duration: 2000
        })
        this.isLoading = false;
        return of(null);
      })).subscribe((result) => {
      if (result != null)
        this.weather = result
      this.isLoading = false;
    })
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Weather} from "../interfaces/weather.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiEndpoint: string = environment.apiUrl

  constructor(private http: HttpClient) {
  }

  getWeatherByCity(cityName: string): Observable<Weather> {

    return this.http.get<Weather>(
      `${this.apiEndpoint}weather?location=${cityName}`
    )
  }
}

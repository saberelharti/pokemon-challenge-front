import {Component, Input, OnInit} from '@angular/core';
import {Weather} from "../core/interfaces/weather.interface";

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  @Input()
  weather: Weather;

  constructor() { }

  ngOnInit(): void {
  }

}

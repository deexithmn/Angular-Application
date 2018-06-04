import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.scss']
})
export class LocalForecastComponent implements OnInit {
  placeCode = '';
  lat: number;
  lan: number;
  city: string;
  weatherData: any[] = [];
  constructor(private httpClient: HttpClient) {}
  onNameKeyUp(s: any) {
    if ( s.key !== 'Enter') {
      this.placeCode = this.placeCode + s.key;
    }
  }
  getWeather() {
    let w = [];
    this.httpClient.get('https://api.sandbox.amadeus.com/v1.2/location/' + this.placeCode + '?apikey='+<Your API Key>)
      .subscribe(
        (data) => {
          this.lat = data['city']['location']['latitude'];
          this.lan = data['city']['location']['longitude'];
          this.city = data['city']['name'];
          let url = 'https://api.darksky.net/forecast/'+<Your You Api Key>+'/' + this.lat + ',' + this.lan;
          console.log(url)
          this.httpClient.get(url)
            .subscribe(
              (data) => {
                this.weatherData.push(data);
              }
            );
        }
      );
    console.log(this.weatherData[0]);
  }
  ngOnInit() {}
}

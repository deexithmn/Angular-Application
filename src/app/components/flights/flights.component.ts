import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {
  flightData: any[] = [];
  destination: string;
  origin: string;
  departure_date: string;
  constructor(private httpClient: HttpClient) { }
  getFlights() {
    let url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=+'<Your API Key>+'&origin=' + this.origin + '&destination=' + this.destination + '&departure_date=' + this.departure_date + '&number_of_results=1';
    console.log(url)
    this.httpClient.get(url)
      .subscribe(
        (data) => {
          this.flightData.push(data);
          console.log(data);
        });

    console.log(this.flightData.length);
  }
  ngOnInit() {
  }

}

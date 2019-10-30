import {Component, Input, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Stop } from 'src/app/models/Stop';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-hotel-card-list',
  templateUrl: './hotel-card-list.component.html',
  styleUrls: ['./hotel-card-list.component.css']
})
export class HotelCardListComponent implements OnInit {
  arrHotels;
  currentCity: Stop;

  constructor(
    private httpService: HttpClient,
    public tripService: TripService
  ) {
    console.log(tripService.trip);
  }
  ngOnInit() {
    this.hotelByStop(this.tripService.trip.source);
  }
  hotelByStop(stop: Stop) {
    this.currentCity = stop;
    this.httpService
      .get(
        'http://172.16.5.137:5000/api/values/' +
          this.currentCity.location.latitude +
          '/' +
          this.currentCity.location.longitude
      )
      .subscribe(
        (data: {hotels: []}) => {
          this.arrHotels = data.hotels; // FILL THE ARRAY WITH DATA.
          //  console.log(this.arrBirds[1]);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
  }
}

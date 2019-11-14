import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Stop } from '@models/Stop';
import { TripService } from '@services/trip.service';
import { Hotel } from '@models/Hotel';

interface HotelResult {
  hotelId: string;
  name: string;
  contact: {
    address: {
      line1: string,
      line2: string
    }
  };
  geoCode: {
    lat: number,
    long: number
  };
  rating: number;
}

@Component({
  selector: 'app-hotel-card-list',
  templateUrl: './hotel-card-list.component.html',
  styleUrls: ['./hotel-card-list.component.css']
})
export class HotelCardListComponent implements OnInit {
  arrHotels: Hotel[] = [];
  stopIdOfHotel: string;
  chosenCity: string;
  displayLoader: boolean;
  radius = 2;
  stop: Stop;

  constructor(
    private httpService: HttpClient,
    public tripService: TripService
  ) {
    this.displayLoader = false;
  }

  ngOnInit() {
    if (this.tripService.trip.stops.length === 0) {
      this.hotelByStop(this.tripService.trip.destination);
    } else {
      this.hotelByStop(this.tripService.trip.stops[0]);
    }
  }

  hotelByStop(stop: Stop) {
    this.displayLoader = true;
    this.stop = stop;
    this.httpService
      .get('https://tripster-tavisca.firebaseio.com/hotels-api-ip.json')
      .subscribe(hotelsApiDetails => {
        const hotelsApiEndpoint: {
          [ipObj: string]: { [ip: string]: string };
        } = {};
        for (const key in hotelsApiDetails) {
          if (hotelsApiDetails.hasOwnProperty(key)) {
            hotelsApiEndpoint.ipObj = hotelsApiDetails[key];
          }
        }

        console.log(hotelsApiEndpoint.ipObj.ip);

        // Production Data Link
        const hotelsApiUrl = 'http://' + hotelsApiEndpoint.ipObj.ip + '/api/hotels/';

        // Mock Data Link
        // const hotelsApiUrl = 'https://hotel-mock.s3.us-east-2.amazonaws.com/hotel.json';
        // const hotelsApiUrl =
        // 'http://172.16.5.159:5000/api/hotels/';

        this.httpService
          .get(
            hotelsApiUrl +
              stop.location.latitude +
              '/' +
              stop.location.longitude +
              '/' +
              this.radius
          )
          .subscribe(
            (data: { hotels: [] }) => {
              this.chosenCity = stop.name;
              this.stopIdOfHotel = stop.stopId;
              this.arrHotels = [];

              for (const hotelData of data.hotels) {
                this.arrHotels.push(this.getHotelData(hotelData));
              }
              this.displayLoader = false;
            },
            (err: HttpErrorResponse) => {
              console.log(err.message);
            }
          );
      });
  }

  getHotelData(hotelDataApi: HotelResult) {
  //  console.log("here");
    const hotelData: Hotel = {
      placeId: hotelDataApi.hotelId,
      name: hotelDataApi.name,
      description:
        hotelDataApi.contact.address.line1 +
        ',' +
        hotelDataApi.contact.address.line2,
      location: {
        latitude: hotelDataApi.geoCode.lat,
        longitude: hotelDataApi.geoCode.long
      },
      rating: hotelDataApi.rating,

      imageUrl: 'assets\\img\\hotel-demo.jpg',
      arrival: '',
      departure: ''
    };
    return hotelData;
  }

  handleRadiusChange(radiusSliderChange: Event) {
    this.radius = +(radiusSliderChange.target as HTMLInputElement).value;
    this.hotelByStop(this.stop);
  }
}

import { Injectable } from '@angular/core';
import { Trip } from '../models/Trip';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { Stop } from '../models/Stop';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  trip: Trip;
  tripSubject = new Subject<Trip>();
  waypoints = [];
  // waypointLocation:location{lat:number,lng:number}[];
  directionResult: google.maps.DirectionsResult;

  doDisplayHotels = false;
  constructor(private http: HttpClient) {}

  createTrip(trip: Trip) {
    this.trip = trip;
    this.tripSubject.next(trip);
    // console.log("trip.service", trip);
    return this.http.post('http://3.14.69.62:5000/api/trip', trip);
  }

  updateTrip(trip: Trip) {
    this.trip = trip;
    this.tripSubject.next(trip);
   // console.log('http://3.14.69.62:5000/api/trip/'+this.trip.id);
    return this.http.put('http://3.14.69.62:5000/api/trip/'+ trip.id, trip);
  }

  handleDirectionResponse(directionResult: google.maps.DirectionsResult) {
    if (directionResult.routes[0].legs[0]) {
      const destinationArrival = new Date(this.trip.destination.arrival);
      console.log(destinationArrival);
      destinationArrival.setSeconds(
        destinationArrival.getSeconds() +
          directionResult.routes[0].legs[0].duration.value
      );
      this.trip.destination.arrival = destinationArrival.toDateString();

      console.log(this.trip.destination.arrival);
    }
  }

  getPreviousLocation() {

      if (this.trip.stops.length !== 0) {
          const totalStops = this.trip.stops.length;
          return this.trip.stops[totalStops - 1];
      } else {
        return this.trip.source;
      }

  }

 addStopToTrip(stop) {

    this.trip.stops.push(stop);
    this.tripSubject.next(this.trip);
    // console.log("Updated stops array");
    // console.log(this.trip.stops);
    this.updateWaypoints();
 }



  updateWaypoints() {
    if (this.trip.stops.length !== 0) {
      const allStops = this.trip.stops;
      const waypointsLocations = [];
      for (let index = 0; index < this.trip.stops.length; index++) {
        waypointsLocations.push({
          location: {
            lat: allStops[index].location.latitude,
            lng: allStops[index].location.longitude
          }
        });
      }

      this.waypoints = waypointsLocations;
      console.log(this.waypoints);
    }
  }


}

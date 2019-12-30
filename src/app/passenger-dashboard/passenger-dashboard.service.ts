import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
	constructor(private http: HttpClient) {}

	getPassengers(): Observable<Passenger[]> {
		// With HttpClient, you no longer need 'map(response => response.json())'
		return this.http.get<Passenger[]>(PASSENGER_API);
	}

	updatePassenger(passenger: Passenger): Observable<Passenger> {
		return this.http.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger);
	}

	removePassenger(passenger: Passenger): Observable<Passenger> {
		return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
	}
}

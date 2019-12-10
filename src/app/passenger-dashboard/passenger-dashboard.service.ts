import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Passenger } from './models/passenger.interface';

const PASSENGER_API = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
	constructor(private http: HttpClient) {}

	getPassengers(): Observable<Passenger[]> {
		return this.http.get<Passenger[]>(PASSENGER_API);
	}
}

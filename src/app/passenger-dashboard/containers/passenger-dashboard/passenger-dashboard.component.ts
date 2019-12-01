import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-dashboard',
	templateUrl: 'passenger-dashboard.component.html',
	styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent {
	passengers: Passenger[] = [
		{
			id: 1,
			fullName: 'Stephen',
			checkedIn: true,
			checkInDate: 1490742000000,
			children: null
		},
		{
			id: 2,
			fullName: 'Rose',
			checkedIn: false,
			checkInDate: null,
			children: [
				{ name: 'Ted', age: 12 },
				{ name: 'Chloe', age: 7 }
			]
		},
		{
			id: 3,
			fullName: 'James',
			checkedIn: true,
			checkInDate: 1491606000000,
			children: null
		},
		{
			id: 4,
			fullName: 'Louise',
			checkedIn: true,
			checkInDate: 1488412800000,
			children: [{ name: 'Jessica', age: 1 }]
		},
		{
			id: 5,
			fullName: 'Tina',
			checkedIn: false,
			checkInDate: null,
			children: null
		}
	];
}

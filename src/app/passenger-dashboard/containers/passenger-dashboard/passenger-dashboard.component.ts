import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-dashboard',
	template: `
		<div>
			<passenger-count [items]="passengers"></passenger-count>
			<ul class="passengers">
				<li *ngFor="let passenger of passengers" class="passenger-detail">
					<passenger-detail
						[detail]="passenger"
						(remove)="handleRemove($event)"
						(edit)="handleEdit($event)"
					></passenger-detail>
				</li>
			</ul>
		</div>
	`,
	styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
	passengers: Passenger[];

	constructor() {}

	ngOnInit() {
		this.passengers = [
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

	handleEdit(event: Passenger): void {
		this.passengers = this.passengers.map((passenger: Passenger) => {
			if (passenger.id === event.id) {
				passenger = { ...passenger, ...event };
			}
			return passenger;
		});
	}

	handleRemove(event: Passenger): void {
		this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
	}
}

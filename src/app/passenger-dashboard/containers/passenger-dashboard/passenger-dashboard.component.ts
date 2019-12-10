import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

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

	constructor(private passengerDashboardService: PassengerDashboardService) {}

	ngOnInit() {
		this.passengerDashboardService
			.getPassengers()
			.subscribe((data: Passenger[]) => (this.passengers = data));
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

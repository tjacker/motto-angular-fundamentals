import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-viewer',
	template: `
		<div>
			<passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
		</div>
	`,
	styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;

	constructor(private passengerDashboardService: PassengerDashboardService) {}

	ngOnInit() {
		this.passengerDashboardService
			.getPassenger(1)
			.subscribe((data: Passenger) => (this.passenger = data));
	}

	onUpdatePassenger(event: Passenger) {
		this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
			this.passenger = {
				...data,
				...event
			};
		});

		// Alternative to using the spread operator would be:
		// this.passenger = Object.assign({}, data, event);
	}
}

import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-viewer',
	template: `
		<div>
			{{ passenger | json }}
		</div>
	`,
	styleUrls: ['./passenger-viewer.component.sass']
})
export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;
	constructor(private passengerDashboardService: PassengerDashboardService) {}

	ngOnInit() {
		this.passengerDashboardService
			.getPassenger(1)
			.subscribe((data: Passenger) => (this.passenger = data));
	}
}

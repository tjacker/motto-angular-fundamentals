import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-viewer',
	template: `
		<div>
			<button (click)="goBack()">Go back</button>
			<passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
		</div>
	`,
	styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
	passenger: Passenger;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private passengerDashboardService: PassengerDashboardService
	) {}

	ngOnInit() {
		this.route.params
			.pipe(switchMap((data: Passenger) => this.passengerDashboardService.getPassenger(data.id)))
			.subscribe((data: Passenger) => (this.passenger = data));
	}

	onUpdatePassenger(event: Passenger) {
		// Alternative to using the spread operator would be:
		// this.passenger = Object.assign({}, data, event);
		this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
			this.passenger = {
				...data,
				...event
			};
		});
	}

	goBack() {
		this.router.navigate(['/passengers']);
	}
}

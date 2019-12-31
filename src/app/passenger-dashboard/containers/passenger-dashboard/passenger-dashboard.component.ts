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
		this.passengerDashboardService.getPassengers().subscribe(
			(data: Passenger[]) => (this.passengers = data),
			(error: any) => {
				console.error('HTTP GET ERROR:', error.message);
				this.passengers = [];
			},
			// tslint:disable-next-line: no-console
			() => console.info('HTTP GET SUCCESSFUL')
		);
	}

	handleEdit(event: Passenger): void {
		this.passengerDashboardService.updatePassenger(event).subscribe((data: Passenger) => {
			this.passengers = this.passengers.map((passenger: Passenger) => {
				if (passenger.id === data.id) {
					passenger = { ...passenger, ...event };
				}
				return passenger;
			});
		});
	}

	handleRemove(event: Passenger): void {
		this.passengerDashboardService.removePassenger(event).subscribe((data: Passenger) => {
			this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
		});
	}
}

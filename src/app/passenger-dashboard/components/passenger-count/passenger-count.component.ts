import { Component, OnInit, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-count',
	template: `
		<div>
			<h3>Airline Passengers</h3>
			<div>Total checked in: {{ checkedInCount() }} of {{ items?.length }} passengers</div>
		</div>
	`
})
export class PassengerCountComponent implements OnInit {
	@Input() items: Passenger[];

	checkedInCount(): number {
		if (this.items) {
			return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
		}
	}

	ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
	selector: 'passenger-form',
	templateUrl: 'passenger-form.component.html',
	styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
	@Input() detail: Passenger;
	@Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	baggage: Baggage[] = [
		{
			key: 'none',
			value: 'None'
		},
		{
			key: 'carry-only',
			value: 'Carry-on only'
		},
		{
			key: 'checked-only',
			value: 'Checked only'
		},
		{
			key: 'carry-checked',
			value: 'Carry-on and checked'
		}
	];

	constructor() {}

	ngOnInit() {}

	toggleCheckIn(checkedIn: boolean): void {
		if (checkedIn) {
			this.detail.checkInDate = Date.now();
		}
	}

	handleSubmit(passenger: Passenger, isValid: boolean): void {
		if (isValid) {
			this.update.emit(passenger);
		}
	}
}

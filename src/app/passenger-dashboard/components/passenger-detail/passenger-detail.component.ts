import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-detail',
	templateUrl: 'passenger-detail.component.html',
	styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges {
	@Input() detail: Passenger;

	@Output() edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
	@Output() remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
	@Output() view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

	editing: boolean;

	ngOnChanges(changes) {
		// Only notifies the parent of changes when editing is complete rather then on each keypress
		if (changes.detail) {
			this.detail = { ...changes.detail.currentValue };
		}
	}

	onNameChange(value: string) {
		this.detail.fullName = value;
	}

	toggleEdit(): void {
		if (this.editing) {
			this.edit.emit(this.detail);
		}
		this.editing = !this.editing;
	}

	onRemove(): void {
		this.remove.emit(this.detail);
	}

	goToPassenger(): void {
		this.view.emit(this.detail);
	}
}

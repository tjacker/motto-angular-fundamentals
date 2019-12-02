import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-detail',
	template: `
		<div>
			<span class="status" [class.checked-in]="detail.checkedIn"></span>
			<div *ngIf="editing">
				<input type="text" [value]="detail.fullName" (input)="onNameChange(name.value)" #name />
			</div>
			<div *ngIf="!editing">
				{{ detail.fullName }}
			</div>
			<div class="date">
				Check in date:
				{{
					detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'
				}}
			</div>
			<div class="children">Children: {{ detail.children?.length || 0 }}</div>
			<button (click)="toggleEdit()">{{ editing ? 'Save' : 'Edit' }}</button>
			<button (click)="onRemove()">Remove</button>
		</div>
	`,
	styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent {
	@Input() detail: Passenger;
	@Output() remove: EventEmitter<any> = new EventEmitter();
	@Output() edit: EventEmitter<any> = new EventEmitter();
	editing: boolean;

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
}

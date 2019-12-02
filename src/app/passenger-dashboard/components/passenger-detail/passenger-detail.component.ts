import { Component, Input } from '@angular/core';

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
		</div>
	`,
	styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent {
	@Input() detail: Passenger;
	editing: boolean;

	onNameChange(value: string) {
		this.detail.fullName = value;
	}

	toggleEdit() {
		this.editing = !this.editing;
	}
}

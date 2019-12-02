import { Component, OnInit, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-detail',
	template: `
		<div>
			<span class="status" [class.checked-in]="detail.checkedIn"></span>
			<div>
				<input type="text" [value]="detail.fullName" />
			</div>
			<div>
				{{ detail.fullName }}
			</div>
			<div class="date">
				Check in date:
				{{
					detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in'
				}}
			</div>
			<div class="children">Children: {{ detail.children?.length || 0 }}</div>
		</div>
	`,
	styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {
	@Input() detail: Passenger;

	ngOnInit() {}
}

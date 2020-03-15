import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'not-found',
	template: `
		<div>
			<h1>404 Page Not Found</h1>
		</div>
	`,
	styles: [
		`
			h1 {
				font-size: 2rem;
				font-weight: bold;
			}
		`
	]
})
export class NotFoundComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

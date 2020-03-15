import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { PassengerDashboard } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
	declarations: [AppComponent, NotFoundComponent],
	imports: [BrowserModule, PassengerDashboard, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}

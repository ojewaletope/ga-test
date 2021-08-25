import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }

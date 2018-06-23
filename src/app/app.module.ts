import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

export function HighchartsFactory () {
  const hc = require('highcharts/highstock');
  const hd = require('highcharts/modules/exporting');
  var expdt = require('highcharts/modules/export-data');
  hd(hc);
  expdt(hc);
  return hc; 
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule
  ],
  providers: [
  {
      provide: HighchartsStatic,
      useFactory:HighchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

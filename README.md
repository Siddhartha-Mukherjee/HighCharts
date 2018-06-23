# Highchart

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.


## Setting Up

### git clone (https://github.com/Siddhartha-Mukherjee/HighCharts.git)


### Install all dependencies npm
```
### npm install
```

### Setup App app.module.ts
```TypeScript
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

```

#### Create First Chart app.component.ts
Main charts functionality provided by the `chart` component and its `options` property.

```TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
  	this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [[29.9,656], [71.5,4656], [6.4,6547], [129.2]],
            }]
        };
    }
    options: Object;
 }


```


#### Create First Chart app.component.html
```HTML
<chart [options]="options" (selection)="onChartSelection($event)"> </chart>
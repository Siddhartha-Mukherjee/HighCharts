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


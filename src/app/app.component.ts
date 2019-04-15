import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB 3 beqa tediashvili';
  allData = [{
    name: 'ბექა',
    surename: 'თედიაშვილი',
    personalNumber: '12345678910'
  }]
  getDatas(e){
    this.allData = e
  }
}

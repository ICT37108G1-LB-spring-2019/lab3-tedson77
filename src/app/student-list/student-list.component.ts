import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  x = [
    {
      name: 'ბექა',
      surname: 'თედიაშვილი',
      personalNumber: '12345678910'
    },
    {
      name: 'ბექა2',
      surname: 'თედიაშვილი2',
      personalNumber: '12345678911'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

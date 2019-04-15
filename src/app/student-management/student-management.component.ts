import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eraseName = ''
  eraseSurename = ''
  erasePersonalNumber = ''

  datas = [{
    name: 'ბექა',
    surename: 'თედიაშვილი',
    personalNumber: '12345678910'
  }]
  @Output() dataFromStudentManagement = new EventEmitter();
  
  clickOnButton(){
    let getName = (<HTMLInputElement>document.getElementById("studentName")).value
    let getSurename = (<HTMLInputElement>document.getElementById("studentSurname")).value
    let getPersonalNumber = (<HTMLInputElement>document.getElementById("studentPersonalNumber")).value

    if(getName == '' || getSurename == '' || getPersonalNumber == ''){
      alert('შეავსეთ ყველა ველი')
    }
    else{
      this.datas.push({
        name: getName,
        surename: getSurename,
        personalNumber: getPersonalNumber
      })

      this.dataFromStudentManagement.emit(this.datas)
      this.eraseName = ''
      this.eraseSurename = ''
      this.erasePersonalNumber = ''
    }
  }
}
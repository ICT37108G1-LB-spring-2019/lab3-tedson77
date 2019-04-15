import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentItemComponent } from './student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentManagementComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from '../rooms/rooms.component';
import { ScheduleComponent } from '../schedule/schedule.component';



@NgModule({
  declarations: [
    RoomsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrmModule { }

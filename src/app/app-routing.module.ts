import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './crm/rooms/rooms.component';
import { ScheduleComponent } from './crm/schedule/schedule.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    title: 'Rooms',
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    title: 'Schedule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

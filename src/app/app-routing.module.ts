import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { RoomsComponent } from './crm/rooms/rooms.component';
import { ScheduleComponent } from './crm/schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Welcome',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    title: 'Rooms',
    canActivate: [AuthGuard]
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    title: 'Schedule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

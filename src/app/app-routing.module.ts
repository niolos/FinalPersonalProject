import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { ComingEventsComponent } from './coming-events/coming-events.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AdminAddsubComponent } from './admin-addsub/admin-addsub.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { SubscriberUpdateComponent } from './subscriber-update/subscriber-update.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { KeepoutGuard } from './keepout.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'subscription', component:SubscriptionComponent},
  {path:'past', component:PastEventsComponent},
  {path:'coming', component:ComingEventsComponent},
  {path:'about', component:AboutComponent},
  {path:'log', component:LoginComponent},
  {path:'main', component:AdminMainComponent, canActivate:[KeepoutGuard]},
  {path:'addSub', component:AdminAddsubComponent, canActivate:[KeepoutGuard]},
  {path:'addEvent', component:AddEventComponent, canActivate:[KeepoutGuard]},
  {path:'events', component:ViewEventsComponent, canActivate:[KeepoutGuard]},
  {path:'updateSub/:id', component:SubscriberUpdateComponent, canActivate:[KeepoutGuard]},
  {path:'updateEvent/:id', component:EventUpdateComponent, canActivate:[KeepoutGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

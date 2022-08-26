import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { ComingEventsComponent } from './coming-events/coming-events.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'subscription', component:SubscriptionComponent},
  {path:'past', component:PastEventsComponent},
  {path:'coming', component:ComingEventsComponent},
  {path:'about', component:AboutComponent},
  {path:'log', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

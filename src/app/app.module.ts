import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { ComingEventsComponent } from './coming-events/coming-events.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { HeadingComponent } from './heading/heading.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAddsubComponent } from './admin-addsub/admin-addsub.component';
import { ViewEventsComponent } from './view-events/view-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { SubscriberUpdateComponent } from './subscriber-update/subscriber-update.component';
import { DatePipe } from '@angular/common';
import { EventUpdateComponent } from './event-update/event-update.component';
import { PastDialogueComponent } from './past-dialogue/past-dialogue.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ComingDialogueComponent } from './coming-dialogue/coming-dialogue.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SubscriptionComponent,
    PastEventsComponent,
    ComingEventsComponent,
    AboutComponent,
    LoginComponent,
    SidenavComponent,
    AdminMainComponent,
    HeadingComponent,
    AdminAddsubComponent,
    ViewEventsComponent,
    AddEventComponent,
    SubscriberUpdateComponent,
    EventUpdateComponent,
    PastDialogueComponent,
    ComingDialogueComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDividerModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

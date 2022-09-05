import { Component, OnInit } from '@angular/core';
import { PastEventService } from '../past-event.service';
import { Events } from '../models/events';
import {MatDialog} from '@angular/material/dialog';
import { PastDialogueComponent } from '../past-dialogue/past-dialogue.component';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.css']
})
export class PastEventsComponent implements OnInit {

  arraySearch:number = 0;
  events!:Events[]

  constructor(private PastEventService:PastEventService, public dialog: MatDialog) { }

  getAllPastEvents():void{
    this.PastEventService.getPastEvents().subscribe(getEvents=>{
      this.events = getEvents
      console.log('this Event is', this.events)
    })
  }

  openDialog(x:number): void {
    
    this.arraySearch=x;
    
    const dialogRef=this.dialog.open(PastDialogueComponent,{
      width:'34%',
      height:'90%',
      data: {pastEventArray: this.events, arraySearch: this.arraySearch}
    });
  }

  ngOnInit(): void {
    this.getAllPastEvents()
  }

}

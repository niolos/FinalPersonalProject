import { Component, OnInit } from '@angular/core';
import { Events } from '../models/events';
import { CominEventsService } from '../comin-events.service';
import {MatDialog} from '@angular/material/dialog';
import { ComingDialogueComponent } from '../coming-dialogue/coming-dialogue.component';

@Component({
  selector: 'app-coming-events',
  templateUrl: './coming-events.component.html',
  styleUrls: ['./coming-events.component.css']
})
export class ComingEventsComponent implements OnInit {

  arraySearch:number = 0;
  events!:Events[]

  constructor(private CominEventsService:CominEventsService, public dialog: MatDialog) { }

  getAllPastEvents():void{
    this.CominEventsService.getPastEvents().subscribe(getEvents=>{
      this.events = getEvents
    })
  }

  openDialog(x:number): void {
    
    this.arraySearch=x;
    
    const dialogRef=this.dialog.open(ComingDialogueComponent,{
      width:'34%',
      height:'90%',
      data: {pastEventArray: this.events, arraySearch: this.arraySearch}
    });
  }

  ngOnInit(): void {
    this.getAllPastEvents()
  }
}

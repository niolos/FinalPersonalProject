import { Component, Inject, OnInit } from '@angular/core';
import {DialogRole, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface Dialogdata{
  _id:string;
    eventName:String;
    eventDate:String;
    location: String;
    description: String;
    cost: Number;
    status:String;
    eventImg:File;
  pastEventArray: any;
  arraySearch: any;
}

@Component({
  selector: 'app-past-dialogue',
  templateUrl: './past-dialogue.component.html',
  styleUrls: ['./past-dialogue.component.css']
})
export class PastDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <PastDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: Dialogdata) { }

  ngOnInit(): void {
  }

}

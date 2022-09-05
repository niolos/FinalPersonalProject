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
  selector: 'app-coming-dialogue',
  templateUrl: './coming-dialogue.component.html',
  styleUrls: ['./coming-dialogue.component.css']
})
export class ComingDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <ComingDialogueComponent>, @Inject(MAT_DIALOG_DATA) public data: Dialogdata) { }

  ngOnInit(): void {
  }

}

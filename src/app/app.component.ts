import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'FinalPersonalProject';
  
  ngOnInit(): void {
  }

  onActive(){
    window.scroll(0, 0);
  }
}

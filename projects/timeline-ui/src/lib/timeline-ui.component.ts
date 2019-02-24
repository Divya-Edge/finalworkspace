import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'time-line-ui',
  templateUrl: './timeline-ui.component.html',
  styleUrls: ['./timeline-ui.component.css']
})
export class TimelineUiComponent implements OnInit {

  @Input() arrData: any;
  
  constructor() { }

  ngOnInit() {
  }

}

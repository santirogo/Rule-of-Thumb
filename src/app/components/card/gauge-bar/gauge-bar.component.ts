import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zem-gauge-bar',
  templateUrl: './gauge-bar.component.html',
  styleUrls: ['./gauge-bar.component.scss']
})
export class GaugeBarComponent implements OnInit {
  @Input() type: number;
  public likePercentage = '50%';
  public dislikePercentage = '50%';

  constructor() { }

  ngOnInit(): void {
  }

}

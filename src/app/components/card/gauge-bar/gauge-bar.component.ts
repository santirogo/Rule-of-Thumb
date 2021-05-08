import {Component, Input, OnInit} from '@angular/core';
import {Vote} from '../../../models/person.model';
import {GaugeBarService} from './gauge-bar.service';

@Component({
  selector: 'zem-gauge-bar',
  templateUrl: './gauge-bar.component.html',
  styleUrls: ['./gauge-bar.component.scss']
})
export class GaugeBarComponent implements OnInit {
  @Input() type: number;
  @Input() votes: Vote;

  constructor(public service: GaugeBarService) { }

  ngOnInit(): void {
  }

}

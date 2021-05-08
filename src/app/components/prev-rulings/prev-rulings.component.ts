import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zem-prev-rulings',
  templateUrl: './prev-rulings.component.html',
  styleUrls: ['./prev-rulings.component.scss']
})
export class PrevRulingsComponent implements OnInit {

  public selectOptions: string[];
  public cardType = 0;

  constructor() { }

  ngOnInit(): void {
    this.selectOptions = ['Grid', 'List'];
  }

  public changeType(option: number): void {
    this.cardType = option;
  }

}

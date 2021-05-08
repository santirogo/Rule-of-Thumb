import {Component, Input, OnInit} from '@angular/core';
import {ConstantsService} from '../../services/constants.service';
import {DomSanitizer} from '@angular/platform-browser';
import {PersonModel} from '../../models/person.model';
import {CardService} from './card.service';

@Component({
  selector: 'zem-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() type: number;
  @Input() info: PersonModel;
  public isUpSelected = false;
  public isDownSelected = false;
  public optionSelected: number;

  constructor(public service: CardService, public sanitize: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  public selectOption(value: number): void {
    this.isUpSelected = value === 0;
    this.isDownSelected = value === 1;
    this.optionSelected = value;
  }

}

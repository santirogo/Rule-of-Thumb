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
  public currentStatus = '/assets/img/thumbs-up.svg';

  constructor(public service: CardService, public sanitize: DomSanitizer) {
  }

  ngOnInit(): void {
    this.service.calculateTime(this.info.lastUpdated);
  }

}

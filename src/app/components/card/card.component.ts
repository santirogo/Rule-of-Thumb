import {Component, Input, OnInit} from '@angular/core';
import {ConstantsService} from '../../services/constants.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'zem-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() type: number;
  public photo: string;
  public currentStatus = '/assets/img/thumbs-up.svg';

  constructor(private constants: ConstantsService, public sanitize: DomSanitizer) {
    this.photo = this.constants.IMAGEN;
  }

  ngOnInit(): void {

  }

}

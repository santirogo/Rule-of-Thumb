import { Injectable } from '@angular/core';
import {Vote} from '../../models/person.model';
import {ConstantsService} from '../../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private constantsService: ConstantsService) { }

  public isUpWinning(votes: Vote): boolean {
    return votes.positive > votes.negative;
  }

  public getThumbUpImageUrl(): string {
    return this.constantsService.THUMB_UP_IMAGE_URL;
  }

  public getThumbDownImageUrl(): string {
    return this.constantsService.THUMB_DOWN_IMAGE_URL;
  }
}

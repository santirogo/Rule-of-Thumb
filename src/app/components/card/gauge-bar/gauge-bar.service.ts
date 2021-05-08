import {Injectable} from '@angular/core';
import {Vote} from '../../../models/person.model';
import {ConstantsService} from '../../../services/constants.service';

@Injectable({
  providedIn: 'root'
})
export class GaugeBarService {

  constructor(private constantsService: ConstantsService) { }

  public calculatePercentages(votes: Vote): number[] {
    const total = votes.positive + votes.negative;
    return [
      (votes.positive / total) * 100,
      (votes.negative / total) * 100
    ];
  }

  public getThumbUpImageUrl(): string {
    return this.constantsService.THUMB_UP_IMAGE_URL;
  }

  public getThumbDownImageUrl(): string {
    return this.constantsService.THUMB_DOWN_IMAGE_URL;
  }
}

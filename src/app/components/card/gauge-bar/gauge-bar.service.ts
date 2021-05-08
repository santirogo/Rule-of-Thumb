import {Injectable} from '@angular/core';
import {Vote} from '../../../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class GaugeBarService {

  constructor() { }

  public calculatePercentages(votes: Vote): number[] {
    const total = votes.positive + votes.negative;
    return [
      (votes.positive / total) * 100,
      (votes.negative / total) * 100
    ];
  }
}

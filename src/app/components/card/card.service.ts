import { Injectable } from '@angular/core';
import {PersonModel, Vote} from '../../models/person.model';
import {ConstantsService} from '../../services/constants.service';
import {PeopleService} from '../../services/people.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public votedStatusPerson = [
    false,
    false,
    false,
    false,
    false
  ];

  constructor(private constantsService: ConstantsService, private peopleService: PeopleService) { }

  public isUpWinning(votes: Vote): boolean {
    return votes.positive > votes.negative;
  }

  public calculateTime(date: Date): number {
    const currentDate = new Date();
    return currentDate.getMonth() - date.getMonth() + ((currentDate.getFullYear() - date.getFullYear()) * 12);
  }

  public vote(info: PersonModel, option: number, position: number): void {
    if (option === 0) {
      info.votes.positive++;
    } else {
      info.votes.negative++;
    }
    this.peopleService.updatePerson(info.id, info);
    this.updateVotedStatusPerson(position);
  }

  public updateVotedStatusPerson(position: number): void {
    this.votedStatusPerson[position] = !this.votedStatusPerson[position];
  }

  public getThumbUpImageUrl(): string {
    return this.constantsService.THUMB_UP_IMAGE_URL;
  }

  public getThumbDownImageUrl(): string {
    return this.constantsService.THUMB_DOWN_IMAGE_URL;
  }
}

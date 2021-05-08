import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {PersonModel} from '../../models/person.model';

@Component({
  selector: 'zem-prev-rulings',
  templateUrl: './prev-rulings.component.html',
  styleUrls: ['./prev-rulings.component.scss']
})
export class PrevRulingsComponent implements OnInit {

  public selectOptions: string[];
  public cardType = 0;
  public people: PersonModel[];
  public isLoading = false;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.selectOptions = ['Grid', 'List'];
    this.isLoading = true;
    this.peopleService.getPeople().subscribe((people) => {
      this.people = [];
      people.forEach((person) => {
        const personObject = person.payload.doc.data() as PersonModel;
        personObject.id = person.payload.doc.id;
        personObject.lastUpdated = new Date((personObject.lastUpdated.seconds) * 1000);
        this.people.push(personObject);
      });
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      console.error(error);
    });
  }

  public changeType(option: number): void {
    this.cardType = option;
  }

}

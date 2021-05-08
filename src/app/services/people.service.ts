import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {PersonModel} from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private firestore: AngularFirestore) { }

  public getPeople() {
    return this.firestore.collection('people').snapshotChanges();
  }

  public updatePerson(id: string, data: PersonModel): void {
    console.log('update!');
    this.firestore.collection('people').doc(id).set(data).then();
  }
}

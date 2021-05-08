import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private firestore: AngularFirestore) { }

  public getPeople() {
    return this.firestore.collection('people').snapshotChanges();
  }

  public updatePerson(id: string, data: any): void {
    this.firestore.collection('people').doc(id).set(data).then();
  }
}

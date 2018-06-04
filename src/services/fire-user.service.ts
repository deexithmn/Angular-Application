import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {UserAng} from '../app/models/User';
import {map} from 'rxjs/internal/operators';



@Injectable({
  providedIn: 'root'
})
export class FireUserService {
  userCollection: AngularFirestoreCollection<UserAng>;
  user: Observable<UserAng[]>;
  userDoc: AngularFirestoreDocument<UserAng>;
  constructor(public person: AngularFirestore) {
    // this.user = this.person.collection('users').valueChanges();
    this.userCollection = this.person.collection('users');
    this.user = this.person.collection('users').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
                const data = a.payload.doc.data() as UserAng;
                data.id = a.payload.doc.id;
                return data;
          });
      }));
  }
  getUsers() {
    return this.user;
  }
  addUsers(newUser: UserAng) {
    this.userCollection.add(newUser);
  }
  deleteUser(delUser: UserAng) {
    this.userDoc =  this.person.doc(`users/${delUser.id}`);
    this.userDoc.delete();
  }
}



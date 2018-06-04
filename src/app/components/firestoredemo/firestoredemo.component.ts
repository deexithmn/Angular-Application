///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FireUserService} from '../../../services/fire-user.service';
import {UserAng} from '../../models/User';

@Component({
  selector: 'app-firestoredemo',
  templateUrl: './firestoredemo.component.html',
  styleUrls: ['./firestoredemo.component.scss']
})
export class FirestoredemoComponent implements OnInit {
  users: UserAng[];

  constructor(private fireservice: FireUserService) {
    this.loadData();
  }

  ngOnInit() {
    console.log('Inside the firestore template');
    this.fireservice.getUsers().subscribe(users => {
      this.users = users;
      console.log(users.length);
    });
  }
  // }
  deleteUser(event , user) {
    this.fireservice.deleteUser(user);
  }
  loadData() {
    this.fireservice.getUsers().subscribe(users => {
      this.users = users;
      // Trying to print the data into the Console
      console.log( 'isndie the kfdsjklfjhasdkjk' );
      for (let i = 0; i < users.length; i ++) {
        console.log(users[i]['name']);
        console.log(users[i]['email']);
        console.log(users[i]['phone']);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {UserAng} from '../../models/User';
import {FireUserService} from '../../../services/fire-user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: UserAng = {
      name: '',
      email: '',
      phone: ''
}
  constructor(private userFire: FireUserService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.phone);
    if (this.user.name !== '' && this.user.phone !== '' && this.user.email !== '') {
      this.userFire.addUsers(this.user);
      this.user.name = '';
      this.user.email = '';
      this.user.phone = '';
    }
  }
}

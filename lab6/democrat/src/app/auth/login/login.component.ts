import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html ',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(
    private service: AuthService,
    private afAuth: AngularFireAuth
  ) {
  }
}


import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  ngOnInit(){
  firebase.initializeApp({
    apiKey:"AIzaSyBhlEgP1wgavliNX0MZgH9IJsYAlxd6Fd0",
    authDomain: "https://ng-book-a831b.firebaseio.com"
  });
  }
  title = 'book-web';
}

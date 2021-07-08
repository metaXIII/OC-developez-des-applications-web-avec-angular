import {Component} from '@angular/core';
import firebase from "firebase"
import {FireBaseConfig} from "./models/firebaseConfig.model"

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  title = 'librairie';

  constructor() {
    const firebaseConfig = new FireBaseConfig()
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

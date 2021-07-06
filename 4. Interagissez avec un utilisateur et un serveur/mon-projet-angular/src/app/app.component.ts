import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs"

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number = 0
  counterSubscription!: Subscription

  constructor() {
  }

  ngOnInit(): void {
    const counter    = interval(1000)
    this.counterSubscription = counter.subscribe((resp: number) => this.secondes = resp
      , error => console.log("Oups !, une erreur est survenue !")
      , () => console.log("complete"))
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe()
  }
}

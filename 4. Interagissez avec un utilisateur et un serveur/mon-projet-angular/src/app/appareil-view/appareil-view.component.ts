import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from "../services/appareil.service"
import {Subscription} from "rxjs"

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {
  appareilsSubscription!: Subscription
  isAuth: boolean           = false
  lastUpdate: Promise<Date> = new Promise(((resolve) => {
    const date = new Date()
    setTimeout(() => {
      resolve(date)
    }, 2000)
  }))
  appareils!: any[]



  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true
    }, 4000);
  }

  ngOnInit(): void {
    this.appareilsSubscription = this.appareilService.appareilsSubjects.subscribe((appareils : any) => {
      this.appareils = appareils
    })
    this.appareilService.emitAppareilSubject()
  }

  onAllumer(): void {
    this.appareilService.switchOnAll()
  }

  onEteindre(): void {
    if (confirm("Etes vous sur de vouloir éteindre tous les appareils ?"))
      this.appareilService.switchOffAll()
  }

  ngOnDestroy(): void {
    this.appareilsSubscription.unsubscribe()
  }
}

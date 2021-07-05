import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../appareil.service"

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

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
    this.appareils = this.appareilService.appareils
  }

  onAllumer(): void {
    this.appareilService.switchOnAll()
  }

  onEteindre(): void {
    if (confirm("Etes vous sur de vouloir éteindre tous les appareils ?"))
      this.appareilService.switchOffAll()
  }

}

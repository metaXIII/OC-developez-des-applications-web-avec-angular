import {Component} from '@angular/core';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent {
  isAuth: boolean           = false
  lastUpdate: Promise<Date> = new Promise(((resolve) => {
    const date = new Date()
    setTimeout(() => {
      resolve(date)
    }, 2000)
  }))

  appareils: any = [
    {
      name  : 'Machine à laver',
      status: 'éteint'
    },
    {
      name  : 'Frigo',
      status: 'allumé'
    },
    {
      name  : 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true
    }, 4000);
  }

  onAllumer() {
    console.log('On allume tout')
  }
}

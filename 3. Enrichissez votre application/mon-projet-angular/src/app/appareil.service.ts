import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService {
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

  switchOnAll() {
    this.appareils.forEach((x: any) => x.status = "allumé")
  }

  switchOffAll() {
    this.appareils.forEach((x: any) => x.status = "éteint")
  }

  switchOnOne(i: number) {
    this.appareils[i].status = "allumé"
  }

  switchOffOne(i: number) {
    this.appareils[i].status = "éteint"
  }
}

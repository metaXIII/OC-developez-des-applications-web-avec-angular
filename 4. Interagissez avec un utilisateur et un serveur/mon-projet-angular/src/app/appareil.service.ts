import {Injectable} from '@angular/core';
import {Subject, Subscription} from "rxjs"

@Injectable()
export class AppareilService {
  private appareils: any = [
    {
      id    : 1,
      name  : 'Machine à laver',
      status: 'éteint'
    },
    {
      id    : 2,
      name  : 'Frigo',
      status: 'allumé'
    },
    {
      id    : 3,
      name  : 'Ordinateur',
      status: 'éteint'
    }
  ];

  appareilsSubjects: Subject<any> = new Subject<any[]>()

  emitAppareilSubject() {
    this.appareilsSubjects.next(this.appareils.slice())
  }

  switchOnAll() {
    this.appareils.forEach((x: any) => x.status = "allumé")
    this.emitAppareilSubject()
  }

  switchOffAll() {
    this.appareils.forEach((x: any) => x.status = "éteint")
    this.emitAppareilSubject()
  }

  switchOnOne(i: number) {
    this.appareils[i].status = "allumé"
    this.emitAppareilSubject()
  }

  switchOffOne(i: number) {
    this.appareils[i].status = "éteint"
    this.emitAppareilSubject()
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find((s: any) => {
        return s.id === id
      }
    );
    return appareil;
  }
}

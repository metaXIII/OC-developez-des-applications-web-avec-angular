import {Injectable} from '@angular/core';
import {Subject} from "rxjs"
import {HttpClient} from "@angular/common/http"

@Injectable()
export class AppareilService {
  private appareils: any = []
  private urlFirebase = "https://oc-angular-interaction-serveur-default-rtdb.europe-west1.firebasedatabase.app/appareils.json"
  // private appareils: any = [
  //   {
  //     id    : 1,
  //     name  : 'Machine à laver',
  //     status: 'éteint'
  //   },
  //   {
  //     id    : 2,
  //     name  : 'Frigo',
  //     status: 'allumé'
  //   },
  //   {
  //     id    : 3,
  //     name  : 'Ordinateur',
  //     status: 'éteint'
  //   }
  // ];

  appareilsSubjects: Subject<any> = new Subject<any[]>()

  constructor(private httpClient: HttpClient) {
    this.getAppareilsFromServer()
  }

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
    return this.appareils.find((s: any) => {
        return s.id === id
      }
    );
  }

  addApareil(name: string, status: string): void {
    const appareil: any = {
      id    : this.appareils[this.appareils.length - 1].id + 1, //get last id
      name  : name,
      status: status
    }
    this.appareils.push(appareil)
    this.emitAppareilSubject()
  }

  saveAppareilsToServer() {
    this.httpClient.put(this.urlFirebase, this.appareils).subscribe(
      () => {
        console.log("Enregistrement effectué")
      }, error => {
        console.log("Erreur" + error)
      }
    )
  }

  getAppareilsFromServer() {
    this.httpClient.get<any[]>(this.urlFirebase)
      .subscribe(resp => {
        this.appareils = resp
        this.emitAppareilSubject()
      }, error => {
        console.log("erreur : " + error)
      })
  }
}

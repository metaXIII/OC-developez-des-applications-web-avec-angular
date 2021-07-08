export class FireBaseConfig {
  constructor(public apiKey?: string,
              public authDomain?: string,
              public projectId?: string,
              public databaseURL?: string,
              public storageBucket?: string,
              public messagingSenderId?: string,
              public appId?: string) {
    this.apiKey            = ""
    this.authDomain        = ""
    this.projectId         = ""
    this.databaseURL       = ""
    this.storageBucket     = ""
    this.messagingSenderId = ""
    this.appId             = ""
  }
}

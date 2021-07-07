import {Injectable} from '@angular/core';
import {User} from "../model/user.model"
import {Subject} from "rxjs"

@Injectable()
export class UserService {

  private users: User[]                = []
  public usersSubject: Subject<User[]> = new Subject<User[]>()

  constructor() {
  }

  emitUser(): void {
    if (this.users.length > 0)
      this.usersSubject.next(this.users.slice())
    else {
      this.users.push(new User('Gaël', 'Lehchibi', 'a@a.fr',
        'jus d\'ananas', ['coder', 'boire du café']))
      this.emitUser()
    }
  }

  addUser(user: User): void {
    this.users.push(user)
    this.emitUser()
  }
}

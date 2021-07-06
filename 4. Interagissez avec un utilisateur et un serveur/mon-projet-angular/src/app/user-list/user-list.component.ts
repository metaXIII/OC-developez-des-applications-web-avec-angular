import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../services/user.service"
import {User} from "../model/user.model"
import {Subscription} from "rxjs"

@Component({
  selector   : 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users!: User[]
  userSubscription!: Subscription

  ngOnInit(): void {
    this.userSubscription = this.userService.usersSubject.subscribe((users: User[]) => {
      this.users = users
    }, error => console.log("oups, une erreur" + error))
    this.userService.emitUser()
  }

  constructor(private userService: UserService) {
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }
}

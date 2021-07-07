import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms"
import {UserService} from "../services/user.service"
import {Router} from "@angular/router"
import {User} from "../model/user.model"

@Component({
  selector   : 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls  : ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm(): void {
    this.userForm = this.formBuilder.group({
      firstName      : ['', Validators.required],
      lastName       : ['', Validators.required],
      email          : ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies        : this.formBuilder.array([])
    })
  }

  async onSubmitForm() {
    const formValue = this.userForm.value
    const user      = new User(formValue["firstName"],
      formValue["lastName"],
      formValue["email"],
      formValue["drinkPreference"],
      formValue["hobbies"] ? formValue["hobbies"] : [])
    this.userService.addUser(user)
    await this.router.navigate(["/users"])
  }

  getHobbies(): FormArray {
    return this.userForm.get("hobbies") as FormArray
  }

  onAddHobby():void {
    const newHobbyControl = this.formBuilder.control(null, [Validators.required, Validators.email])
    this.getHobbies().push(newHobbyControl)
  }
}

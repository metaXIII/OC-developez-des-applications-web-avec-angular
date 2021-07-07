import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingleBookComponent} from "./book-list/single-book/single-book.component"
import {SignupComponent} from "./auth/signup/signup.component"
import {BookFormComponent} from "./book-list/book-form/book-form.component"
import {BookListComponent} from "./book-list/book-list.component"
import {SigninComponent} from "./auth/signin/signin.component"
import {AuthGuardService} from "./services/auth-guard.service"

const routes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'books', component: BookListComponent, canActivate: [AuthGuardService]},
  {path: 'books/new', component: BookFormComponent, canActivate: [AuthGuardService]},
  {path: 'books/view/:id', component: SingleBookComponent, canActivate: [AuthGuardService]},
  {path: "", redirectTo: "books", pathMatch: "full"},
  {path: "**", redirectTo: "books"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppareilViewComponent} from "./appareil-view/appareil-view.component"
import {AuthComponent} from "./auth/auth.component"
import {SingleAppareilComponent} from "./single-appareil/single-appareil.component"
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component"
import {AuthGuardService} from "./services/auth-guard.service"
import {EditAppareilComponent} from "./edit-appareil/edit-appareil.component"
import {UserListComponent} from "./user-list/user-list.component"

const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppareilViewComponent} from "./appareil-view/appareil-view.component"
import {AuthComponent} from "./auth/auth.component"
import {SingleAppareilComponent} from "./single-appareil/single-appareil.component"
import {FourOhFourComponent} from "./four-oh-four/four-oh-four.component"
import {AuthGuardService} from "./auth-guard.service"

const routes: Routes = [
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
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

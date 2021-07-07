import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from "@angular/common"
import localeFr from '@angular/common/locales/fr';
import {AppareilService} from "./services/appareil.service";
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component'
import {AuthService} from "./services/auth.service";
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component'
import {AuthGuardService} from "./services/auth-guard.service";
import {EditAppareilComponent} from './edit-appareil/edit-appareil.component'
import {UserService} from "./services/user.service";
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component'
import {HttpClientModule} from "@angular/common/http"

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports     : [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers   : [{provide: LOCALE_ID, useValue: 'fr-FR'}, AppareilService, AuthService, AuthGuardService, UserService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

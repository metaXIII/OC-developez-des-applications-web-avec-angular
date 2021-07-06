import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from "@angular/common"
import localeFr from '@angular/common/locales/fr';
import {AppareilService} from "./appareil.service";
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component'
import {AuthService} from "./auth.service";
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component'
import {AuthGuardService} from "./auth-guard.service"

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers   : [{provide: LOCALE_ID, useValue: 'fr-FR'}, AppareilService, AuthService, AuthGuardService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from "@angular/common"
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers   : [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ListpostsComponent} from './listposts/listposts.component';
import {NewpostComponent} from './newpost/newpost.component';
import {ErrorComponent} from './error/error.component';
import {PostService} from "./services/post.service";
import { ListpostitemComponent } from './listpostitem/listpostitem.component'
import {ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListpostsComponent,
    NewpostComponent,
    ErrorComponent,
    ListpostitemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers   : [PostService],
  bootstrap   : [AppComponent]
})
export class AppModule {
}

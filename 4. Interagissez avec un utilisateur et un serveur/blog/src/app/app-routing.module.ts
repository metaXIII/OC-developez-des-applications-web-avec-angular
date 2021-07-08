import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListpostsComponent} from "./listposts/listposts.component"
import {NewpostComponent} from "./newpost/newpost.component"
import {ErrorComponent} from "./error/error.component"

const routes: Routes = [
  {path: "posts", component: ListpostsComponent},
  {path: "post", component: NewpostComponent},
  {path: "error", component: ErrorComponent},
  {path: "", redirectTo: "posts", pathMatch: "full"},
  {path: "**", redirectTo: "error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

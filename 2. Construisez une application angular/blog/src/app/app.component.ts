import {Component} from '@angular/core';
import {Post} from "./model/post"

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  title            = 'blog';
  postList: Post[] = [new Post("Mon premier post", "Lorem ipsum dolor sit amet, " +
    "consectetur adipisicing elit. Ab aliquam aperiam commodi distinctio dolorum eius et excepturi " +
    "exercitationem inventore magnam, minima odit omnis pariatur ratione repellat similique ut vel" +
    " veritatis."), new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur " +
    "adipisicing elit. Ab aliquam aperiam commodi distinctio dolorum eius et excepturi exercitationem " +
    "inventore magnam, minima odit omnis pariatur ratione repellat similique ut vel veritatis."),
    new Post("Mon troisième post", "Lorem ipsum dolor sit amet, consectetur adipisicing " +
      "elit. Ab aliquam aperiam commodi distinctio dolorum eius et excepturi exercitationem inventore " +
      "magnam, minima odit omnis pariatur ratione repellat similique ut vel veritatis.")]


  constructor() {
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/post"

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  public post!: Post

  constructor() { }

  ngOnInit(): void {
  }

  loveIt(vote: number) {
    vote == 1 ? this.post.loveIts += 1 : this.post.loveIts -= 1;
    console.log("Success : " + this.post.loveIts)
  }
}

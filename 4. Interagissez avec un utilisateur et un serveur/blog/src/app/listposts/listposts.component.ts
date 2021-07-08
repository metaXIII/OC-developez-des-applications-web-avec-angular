import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../model/Post.model"
import {PostService} from "../services/post.service"
import {Subscription} from "rxjs"

@Component({
  selector   : 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls  : ['./listposts.component.scss']
})
export class ListpostsComponent implements OnInit, OnDestroy {
  posts!: Post[]
  postSubscription!: Subscription

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postSubscription = this.postService.postSubjects.subscribe((posts: Post[]) => this.posts = posts)
    this.postService.emitPost()
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe()
  }
}

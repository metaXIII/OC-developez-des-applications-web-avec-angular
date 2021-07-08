import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../model/Post.model"
import {PostService} from "../services/post.service"

@Component({
  selector   : 'app-listpostitem',
  templateUrl: './listpostitem.component.html',
  styleUrls  : ['./listpostitem.component.scss']
})
export class ListpostitemComponent implements OnInit {

  @Input()
  post!: Post

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  loveIt(vote: number) {
    if (vote === 0)
      this.postService.getPost(this.post).loveIts -= 1
    else
      this.postService.getPost(this.post).loveIts += 1
  }

  deletePost(post: Post) {
    this.postService.deletePost(post)
  }
}

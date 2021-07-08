import {Injectable} from '@angular/core';
import {Post} from "../model/Post.model"
import {Subject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[]                 = [new Post("Mon premier post", "Lorem ipsum dolor sit amet, " +
    "consectetur adipisicing elit. Ab aliquam aperiam commodi distinctio dolorum eius et excepturi " +
    "exercitationem inventore magnam, minima odit omnis pariatur ratione repellat similique ut vel" +
    " veritatis."), new Post("Mon deuxième post", "Lorem ipsum dolor sit amet, consectetur " +
    "adipisicing elit. Ab aliquam aperiam commodi distinctio dolorum eius et excepturi exercitationem " +
    "inventore magnam, minima odit omnis pariatur ratione repellat similique ut vel veritatis."),
    new Post("Mon troisième post", "Lorem ipsum dolor sit amet, consectetur adipisicing " +
      "elit. Ab aliquam aperiam commodi distinctio dolorum eius et excepturi exercitationem inventore " +
      "magnam, minima odit omnis pariatur ratione repellat similique ut vel veritatis.")]
  postSubjects: Subject<Post[]> = new Subject<Post[]>()

  constructor() {
  }

  emitPost() {
    this.postSubjects.next(this.posts.slice())
  }

  addPost(post: Post) {
    this.posts.push(post)
    this.emitPost()
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.getIndex(post)
    this.posts.splice(postIndexToRemove, 1)
    this.emitPost()
  }

  private getIndex(post: Post) {
    return this.posts.findIndex((postElement: Post) => {
      if (postElement === post)
        return true
      return
    })
  }

  getPost(post: Post) {
    const index = this.getIndex(post)
    return this.posts[index]
  }
}

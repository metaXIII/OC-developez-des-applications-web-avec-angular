import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {PostService} from "../services/post.service"
import {Router} from "@angular/router"
import {Post} from "../model/Post.model"

@Component({
  selector   : 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls  : ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  postForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  async onSavePost() {
    let header  = this.postForm.get("header")?.value
    let content = this.postForm.get("content")?.value
    if (header === "" || content === "")
      return
    let post = new Post(header, content)
    this.postService.addPost(post)
    await this.router.navigate(["/"])
  }

  private initForm() {
    this.postForm = this.formBuilder.group({
      header : ["", Validators.required],
      content: ["", Validators.required]
    })
  }
}

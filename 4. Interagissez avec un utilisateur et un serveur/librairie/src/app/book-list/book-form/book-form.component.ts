import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {BooksService} from "../../services/books.service"
import {Event, Router} from "@angular/router"
import {Book} from "../../models/book.model"

@Component({
  selector   : 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls  : ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup
  fileIsUploading: boolean = false
  fileUploaded: boolean    = false
  fileUrl!: string

  constructor(private formBuilder: FormBuilder
    , private bookService: BooksService
    , private router: Router) {
  }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.bookForm = this.formBuilder.group({
      title   : ["", Validators.required],
      author  : ["", Validators.required],
      synopsis: ""
    })
  }

  async onSaveBook() {
    const title      = this.bookForm.get("title")?.value
    const author     = this.bookForm.get("author")?.value
    const synopsis   = this.bookForm.get("synopsis")?.value
    const newBook    = new Book(title, author)
    newBook.synopsis = synopsis
    if (this.fileUrl && this.fileUrl !== "")
      newBook.photo = this.fileUrl
    await this.bookService.createNewBook(newBook)
    await this.router.navigate(["/books"])
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true
    this.bookService.uploadFile(file).then(
      (url: string | any) => {
        this.fileUrl         = url
        this.fileUploaded    = true
        this.fileIsUploading = false
      }
    )
  }

  detectFiles(event: any) {
    this.onUploadFile(event.target.files[0])
  }
}

import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/books.service"
import {ActivatedRoute, Router} from "@angular/router"
import {Book} from "../../models/book.model"

@Component({
  selector   : 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls  : ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

  book!: Book

  constructor(private bookService: BooksService
    , private router: Router
    , private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"]
    this.bookService.getSingleBook(+id).then(
      (book: Book | any) => this.book = book
    )
  }

  async onBack() {
    await this.router.navigate(["/books"])
  }

}

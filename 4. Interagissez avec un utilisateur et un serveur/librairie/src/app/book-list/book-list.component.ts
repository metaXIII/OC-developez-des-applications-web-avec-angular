import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../models/book.model"
import {Subscription} from "rxjs"
import {BooksService} from "../services/books.service"
import {Router} from "@angular/router"

@Component({
  selector   : 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls  : ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books!: Book[]
  booksSubscription!: Subscription

  constructor(private bookService: BooksService, private router: Router) {
  }

  ngOnInit(): void {
    this.booksSubscription = this.bookService.bookSubject.subscribe((books: Book[]) => {
      this.books = books
    })
    this.bookService.emitBooks()
  }

  onNewBook() {
    this.router.navigate(["/books", "new"])
  }

  async onDeleteBook(book: Book) {
    await this.bookService.removeBook(book)
  }

  onViewBook(id: number) {
    this.router.navigate(["/books", "view", id])
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe()
  }
}

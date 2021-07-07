import {Injectable} from '@angular/core';
import {Book} from "../models/book.model"
import {Subject} from "rxjs"
import firebase from "firebase"
import DataSnapshot = firebase.database.DataSnapshot

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[]                = []
  bookSubject: Subject<Book[]> = new Subject<Book[]>()

  constructor() {
    this.getBooks()
  }

  emitBooks() {
    this.bookSubject.next(this.books)
  }

  async saveBooks() {
    await firebase.database().ref("/books").set(this.books)
  }

  getBooks() {
    firebase.database().ref("/books").on("value", (data: DataSnapshot) => {
      this.books = data.val() ? data.val() : []
      this.emitBooks()
    })
  }

  getSingleBook(id: number) {
    return new Promise((resolve, reject) => {
      firebase.database().ref("/books/" + id).once("value").then((data: DataSnapshot) => {
        resolve(data.val())
      }, error => {
        reject(error)
      })
    })
  }

  async createNewBook(newBook: Book) {
    this.books.push(newBook)
    await this.saveBooks()
    this.emitBooks()
  }

  async removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex((bookEl: Book) => {
      if (bookEl === book)
        return true
      return
    })
    this.books.splice(bookIndexToRemove, 1)
    await this.saveBooks()
    this.emitBooks()
  }

  uploadFile(file: File) {
    return new Promise((resolve, reject) => {
      const almostUniqueFileName = Date.now().toString()
      const upload               = firebase.storage().ref()
        .child("images/" + almostUniqueFileName + file.name)
        .put(file)
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
        console.log("Chargement...")
      }, error => {
        console.log("Erreur de chargement ! " + error)
        reject()
      }, () => {
        resolve(upload.snapshot.ref.getDownloadURL())
      })
    })
  }
}

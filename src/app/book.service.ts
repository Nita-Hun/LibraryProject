import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];
  private nextId = 1;

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    book.id = this.nextId++;
    this.books.push(book);
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}


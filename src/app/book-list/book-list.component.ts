import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addNewBook(): void {
    this.router.navigate(['/book-form']);
  }

  editBook(book: Book): void {
    this.router.navigate(['/book-form', book.id]);
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }
}


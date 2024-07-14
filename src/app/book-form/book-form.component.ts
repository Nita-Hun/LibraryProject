import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { RouterModule } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BookFormComponent {
  book: Book = { id: 0, title: '', author: '', isbn: '' };
  isEditing = false;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.isEditing = true;
      const existingBook = this.bookService.getBooks().find(b => b.id === +bookId);
      if (existingBook) {
        this.book = { ...existingBook };
      }
    }
  }

  onSubmit(): void {
    if (this.isEditing) {
      this.bookService.updateBook(this.book);
    } else {
      this.bookService.addBook(this.book);
    }
    this.router.navigate(['/']);
  }
}


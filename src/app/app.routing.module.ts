import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';

export const routes: Routes = [
  { path: '', component: BookListComponent }, // Change this to the component you want as the homepage
  { path: 'book-form', component: BookFormComponent },
  { path: 'book-form/:id', component: BookFormComponent },
];



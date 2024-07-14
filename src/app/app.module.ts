import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; // Import the standalone AppComponent
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





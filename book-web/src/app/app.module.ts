
import { AppRoutingModule } from './app-routing.module';
import { MylistService } from './mylist/mylist.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookOneComponent } from './books/book-list/book-one/book-one.component';
import { MylistComponent } from './mylist/mylist.component';
import { MylistEditComponent } from './mylist/mylist-edit/mylist-edit.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { from } from 'rxjs';
import { BookService } from './books/book.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './adm/signup/signup.component';
import { SignInComponent } from './adm/sign-in/sign-in.component';
import {  AdmService } from './adm/adm.service';
import { AdmUser } from './adm/adm-user.service';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BooksComponent,
    BookDetailComponent,
    BookOneComponent,
    MylistComponent,
    MylistEditComponent,
    BookStartComponent,
    BookEditComponent,
    BookListComponent,
    SignupComponent,
    SignInComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [MylistService,BookService,DataStorageService,AdmService, AdmUser],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../books/book.service';
import { Book } from '../books/book.model';
import { AdmService } from '../adm/adm.service';
import { Token } from '@angular/compiler';


@Injectable()
export class DataStorageService{
  constructor(private http: HttpClient ,
              private bookService: BookService,
              private admServic: AdmService) {}

    storeBooks() {
      const token = this.admServic.getToken();

   return  this.http.put('https://ng-book-a831b.firebaseio.com/books.json?auth='+ token, this.bookService.getBooks());
    }
  
    getBooks() { 
    const token = this.admServic.getToken();

this.http.get('https://ng-book-a831b.firebaseio.com/books.json?auth='+ token)
   .subscribe(
    (books: Book[]) => {
      this.bookService.setBooks(books);
    }
  )}}
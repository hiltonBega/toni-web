import { Book } from './../book.model';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService,
               private router: Router,
               private route: ActivatedRoute,
               )
              {

               }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookService.booksChanged.subscribe(
      (books : Book[] ) =>
      { this.books = books;}
    )
  }
  onNewBook(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}

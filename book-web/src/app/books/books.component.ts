import { BookService } from './book.service';
import { Book } from './book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  
})
export class BooksComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
    
  }

}

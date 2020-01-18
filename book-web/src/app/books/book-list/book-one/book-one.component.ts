import { BookService } from './../../book.service';
import { Book } from './../../book.model';
import { Component, OnInit, Input , EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-one',
  templateUrl: './book-one.component.html',
  styleUrls: ['./book-one.component.scss']
})
export class BookOneComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  ngOnInit() {
  }

}

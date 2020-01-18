import { BookService } from './../book.service';
import { Book } from './../book.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookServic: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.book = this.bookServic.getBook(this.id);
      }
    );
  }

  onAddToList() {
   this.bookServic.addLibraToMylist(this.book.libra);
  }
  onEditBook() {
   this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
  onDeleteBook(){
    this.bookServic.deleteBook(this.id);
    this.router.navigate(['/books']);
  }
}

import { MylistService } from './../mylist/mylist.service';
import { Liber } from './../shared/liber.model';
import { EventEmitter,  Injectable } from '@angular/core';
import { Book } from './book.model';
import { Subject } from 'rxjs';

@Injectable()


export class BookService {
   booksChanged = new Subject<Book[]>();

 private books: Book [] = [
    new Book( 'Fjodor Dostojevsk' ,
    ' The Idiot is a novel by the 19th-century Russian author Fyodor Dostoevsky...',
    'https://i.pinimg.com/474x/65/f6/92/65f69215899a472a181e0cab67bc9b72--russian-literature-reading-books.jpg',
     // tslint:disable-next-line: max-line-length
     'The title is an ironic reference to the central character of the novel, Prince (Knyaz) Lev Nikolayevich Myshkin, a young man whose goodness, open-hearted simplicity and guilelessness lead many of the more worldly characters he encounters to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, Dostoevsky set himself the task of depicting "the positively good and beautiful man." The novel examines the consequences of placing such a unique individual at the centre of the conflicts, desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes involved.'
    , [ new Liber('The Idiot', 38.99), ]),
    new Book( ' F. Scott Fitzgerald ' ,
    // tslint:disable-next-line: max-line-length
    ' The Great Gatsby explores themes of decadence, idealism and resistance to change...',
    'https://images-na.ssl-images-amazon.com/images/I/41DM6voCG6L._SX331_BO1,204,203,200_.jpg',
    // tslint:disable-next-line: max-line-length
    'The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan. Considered to be Fitzgeralds magnum opus, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval and excess, creating a portrait of the Roaring Twenties that has been described as a cautionary tale regarding the American Dream.',
    [ new Liber('The Great Gatsby', 35.99)]),
    new Book( '	Victor Hugo' ,
    // tslint:disable-next-line: max-line-length
    'Published in 1862 , is considered one of the greatest novels of the 19th century...',
    'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1411852091l/24280.jpg',
    'Beginning in 1815 and culminating in the 1832 June Rebellion in Paris, the novel follows the lives and interactions of several characters, particularly the struggles of ex-convict Jean Valjean and his experience of redemption.Examining the nature of law and grace, the novel elaborates upon the history of France, the architecture and urban design of Paris, politics, moral philosophy, antimonarchism, justice, religion, and the types and nature of romantic and familial love',
    [ new Liber ('Les Misérables', 27.99)]),
    new Book( ' Homer' ,
    // tslint:disable-next-line: max-line-length
    'The poem  focuses on the Greek hero Odysseus and his journey home after the fall of Troy...',
    'https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SX346_BO1,204,203,200_.jpg',
    'The Odysseyis one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other Homeric epic. The Odyssey is fundamental to the modern Western canon; it is the second-oldest extant work of Western literature, while the Iliad is the oldest.  ',
    [ new Liber ('Odyssey', 22.99)])
  ];

  constructor(private listService: MylistService) {}

  setBooks(books: Book[]){
    this.books =books;
    this.booksChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();
  }
  getBook(index: number) {
    return this.books[index];
  }

  addLibraToMylist(libra: Liber[]) {
  this.listService.addLibra(libra);
  }

  addBook(book: Book){
  this.books.push(book);
  this.booksChanged.next(this.books.slice());
  }
  updateBook(index:number, newBook: Book){
  this.books[index]  = newBook;
  this.booksChanged.next(this.books.slice());
}  
  deleteBook(index: number){
   this.books.splice(index, 1);
   this.booksChanged.next(this.books.slice());
  }
}

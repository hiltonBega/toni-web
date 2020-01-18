import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
    id: number;
    editMode = false;
    bookForm : FormGroup;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
       this.id = +params['id'];
       this.editMode = params['id'] != null;
       this.initForm();
      }
    );
  }

  onSubmit(){
   // const newBook = new Book(
     // this.bookForm.value['author'],
     //  this.bookForm.value['description'],
     //  this.bookForm.value['imagePath'],
     //  this.bookForm.value['des'],
     //  this.bookForm.value['libra']); 
    if(this.editMode){
      this.bookService.updateBook(this.id, this.bookForm.value);
    }else{
      this.bookService.addBook(this.bookForm.value);
  }
   this.onCancel();
}

  addPrice(){
    (<FormArray>this.bookForm.get('libra')).push(
      new FormGroup ({
       'name': new FormControl(null, Validators.required),
       'price': new FormControl( null,[ Validators.required,
        , Validators.pattern(/^[0-9]/)]
       )
      })
    )
  }
  onCancel(){
   this.router.navigate(['../'], {relativeTo: this.route });
  }
private initForm(){
    
    let bookauthor = '';
    let bookdescription='';
    let bookimagePath = '';
    let bookdes='';
    let booklibra = new FormArray([]);
    if (this.editMode) {
    const book = this.bookService.getBook(this.id);  
     bookauthor = book.author;
     bookdescription= book.description;
     bookimagePath= book.imagePath;
     bookdes= book.des;
     if (book['libra']) {
       for ( let  liber of book.libra){
         booklibra.push(
           new FormGroup({
             'name' :  new FormControl(liber.name, Validators.required ),
             'price':  new FormControl(liber.price, [
              Validators.required,
              , Validators.pattern(/^[0-9]/)
             ]) 
           })
         )
       }
     }
    }
    this.bookForm = new FormGroup({
    'author' : new FormControl(bookauthor, Validators.required),
    'imagePath' : new FormControl(bookimagePath, Validators.required),
    'description' : new FormControl(bookdescription, Validators.required),
    'des' : new FormControl(bookdes, Validators.required),
    'libra' : booklibra
  });
}
}

import { MylistService } from './../mylist.service';
import { Liber } from './../../shared/liber.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mylist-edit',
  templateUrl: './mylist-edit.component.html',
  styleUrls: ['./mylist-edit.component.scss']
})
export class MylistEditComponent implements OnInit, OnDestroy {

   subscription: Subscription;
   editMode = false;
   editedIndexItem : number;
   editedItem: Liber;
   @ViewChild('f', {static: true})  mlForm:NgForm ;

  constructor( private listService: MylistService) { }

  ngOnInit() {
   this.subscription = this.listService.StartedEditing
    .subscribe(
      (index: number) => {
        this.editedIndexItem = index;
        this.editMode = true;
        this.editedItem = this.listService.getLIber(index);
        this.mlForm.setValue({
          name: this.editedItem.name,
          price: this.editedItem.price
        })
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
  const newLiber = new Liber(value.name, value.price);
  if(this.editMode) {
    this.listService.UpdateLiber(this.editedIndexItem, newLiber);
  } else {
     this.listService.addLiber(newLiber);
  }
   this.editMode = false;
   form.reset();
  }

  onClear() {
     this.mlForm.reset();
     this.editMode = false;
  }
  onDelete() {
    this.listService.deleteLiber(this.editedIndexItem);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

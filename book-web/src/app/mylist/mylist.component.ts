import { MylistService } from './mylist.service';
import { Liber } from './../shared/liber.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class MylistComponent implements OnInit, OnDestroy {
  libra: Liber[] ;
  private subscription: Subscription;

  constructor(private listService: MylistService) { }

  ngOnInit() {
    this.libra =this.listService.getLibra();
     this.subscription =this.listService.LibraChanged
    .subscribe(
      (libra: Liber[]) =>{
this.libra = libra;
      }
    );
  }
  onEditItem(index: number){
    this.listService.StartedEditing.next(index);
  }

  ngOnDestroy(){
   this.subscription.unsubscribe();
  }

}

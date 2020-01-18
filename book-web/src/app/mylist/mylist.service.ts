import { Liber } from './../shared/liber.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class MylistService{
  LibraChanged = new Subject<Liber[]>();
  StartedEditing = new Subject<number>();
 private libra: Liber[] = [
    new Liber('The Idiot', 30),
    ];

    getLibra(){
      return this.libra.slice();
    }
    getLIber(index: number){
     return this.libra[index];
    }
    addLiber(liber: Liber){
  this.libra.push(liber);
  this.LibraChanged.next(this.libra.slice());
    }
    addLibra(libra: Liber[]) {
    // for (let liber of libra) {
     //  this.addLiber(liber);
     // }
      this.libra.push(...libra);
      this.LibraChanged.next(this.libra.slice());
    }
    
    UpdateLiber(index: number , newLiber : Liber){
      this.libra[index] = newLiber;
      this.LibraChanged.next(this.libra.slice());
    }

    deleteLiber(index: number){
       this.libra.splice(index, 1);
       this.LibraChanged.next(this.libra.slice());
    }

}

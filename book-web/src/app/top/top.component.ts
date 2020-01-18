import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AdmService } from '../adm/adm.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
 
  constructor(private  dataStorageService: DataStorageService,
              private admService: AdmService) {}

onSaveData(){
   this.dataStorageService.storeBooks().subscribe(
     (response: Response) =>{
     console.log(response);
    }
     );
  }
  show:boolean = false;

  toggleCollapse() {
    this.show = !this.show
  }
onFatchData(){
  this.dataStorageService.getBooks();
}

onLogout(){
  this.admService.logout();
}
  ngOnInit() {
  }

}

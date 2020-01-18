import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdmService } from '../adm.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private admService:AdmService) { }

  ngOnInit() {
  }
  onSingin( form: NgForm){
    const email =form.value.email;
    const password =form.value.password;
    this.admService.singinUser(email,password);
  }

}

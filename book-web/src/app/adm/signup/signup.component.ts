import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  AdmService } from '../adm.service';
  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private admService:AdmService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.admService.singupUser(email,password)
  }
}

import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { MylistComponent } from './mylist/mylist.component';
import { BooksComponent } from './books/books.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SignupComponent } from './adm/signup/signup.component';
import { SignInComponent } from './adm/sign-in/sign-in.component';
import { AdmUser } from './adm/adm-user.service';

const appRoutes: Routes = [
   {path: '', redirectTo : '/books', pathMatch: 'full'},
  {path: 'books', component : BooksComponent , children: [
    { path: '', component : BookStartComponent },
   {path: 'new', component: BookEditComponent ,  canActivate: [AdmUser]},
   {path: ':id', component: BookDetailComponent },
    {path: ':id/edit', component: BookEditComponent,  canActivate: [AdmUser] },
  ]},
  {path: 'mylist', component : MylistComponent},
  {path: 'singup', component : SignupComponent},
  {path: 'singin', component : SignInComponent},
];

@NgModule ({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AdmService } from './adm.service';

@Injectable()
export class AdmUser implements  CanActivate {
    constructor(private admService: AdmService ){}

 canActivate(route : ActivatedRouteSnapshot , status: RouterStateSnapshot ){
  return this.admService.isAuthen();
 }
}
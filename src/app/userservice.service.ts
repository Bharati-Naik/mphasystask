import { Injectable } from '@angular/core'; 

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public u:HttpClient) { }

  getUsers(){

    return this.u.get('assets/data.json');


  }  

  createdDate : Date = new Date();
}

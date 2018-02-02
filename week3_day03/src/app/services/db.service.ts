import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { User } from '../models/user.model';
import { Router } from "@angular/router";

@Injectable()
export class DbService {
  private data: User[] = [
    new User(1, "Niwesh", "869110", "niwesh@gmail.com"),
    new User(2, "Jamie", "475890", "jamie@gmail.com"),
    new User(3, "George", "621058", "george@gmail.com"),
    new User(4, "Sam", "546210", "sam@gmail.com"),
    new User(5, "Cheryl", "784150", "cheryl@gmail.com"),
    new User(6, "Tsui", "871540", "tsui@gmail.com")
  ];

  constructor(private logService: LogService, private router: Router) {}
    
  getData() {
    return this.data;
  }

  getDataById(id) {
    let userInfo = this.data[id-1];
    if(userInfo != undefined) {
      return this.data[id-1];
    }else {
      this.router.navigate(['./error']);
    }
  }
}
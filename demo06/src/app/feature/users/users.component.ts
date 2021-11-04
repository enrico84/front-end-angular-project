import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  constructor(public usersService: UsersService) {

  }
  
  // Invoco il Servizio "userService.getUsers()" che ritorna la lista degli User
  ngOnInit() {
    this.usersService.getUsers();
  }
}


import { Component, OnDestroy, OnInit } from '@angular/core';
import {newUsersService} from '../../newUsers.service';
import { newUser } from '../userRegister.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-users-list',
  templateUrl: './new-users-list.component.html',
  styleUrls: ['./new-users-list.component.css']
})
export class NewUsersListComponent implements OnInit, OnDestroy{

   newUserList: newUser[] = [];
  private newUserSubs: Subscription;
  constructor(public newUserService: newUsersService) {}

  ngOnInit (): void {
    this.newUserList = this.newUserService.getPost();
  
    this.newUserSubs = this.newUserService.getPostUpdatedListener().subscribe((nuevosUsuarios: newUser[])=>{
    this.newUserList = nuevosUsuarios;
    console.log(this.newUserList)
    })
  }

  ngOnDestroy(): void {
    this.newUserSubs.unsubscribe()
  }



}

import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-users',
  templateUrl: './rest-users.component.html',
  styleUrls: ['./rest-users.component.css']
})
export class RESTUsersComponent {
  protected title = 'app';
  // protected users$: Observable<IUser[]>;
 users$!: IUser[];
   constructor(public userservice: UserService) {}
 
   ngOnInit() {
     this.userservice.getUsers().subscribe(res => {
       this.users$ = res;
     });
   }

}

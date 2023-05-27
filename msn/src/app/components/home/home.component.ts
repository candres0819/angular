import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends: User[];
  query: string = '';

  constructor(private userService: UserService) {
    let c: number = 1;
    let b: number = 2;
    console.log(c + b);

    this.friends = this.userService.getFriends();
  }

  ngOnInit() {
  }

}

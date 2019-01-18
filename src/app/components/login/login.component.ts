import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  operation: string = 'login';
  email: string = null;
  password: string = null;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password).then(value => {
      alert('login');
      console.log(value);
    }).catch(reason => {
      alert('error');
      console.log(reason);
    });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password).then(value => {
      alert('register');
      console.log(value);
    }).catch(reason => {
      alert('error');
      console.log(reason);
    });
  }
}

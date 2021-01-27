import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin } from '@po-ui/ng-templates';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logo = '/assets/logo.png';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(event: PoPageLogin) {
    this.loginService.login(event).subscribe((result) => {
      console.dir(result);
      this.router.navigate(['home']);
    });
  }
}

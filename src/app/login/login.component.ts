import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(response => {
        const result = response.json();
        console.log(result);
        if (result && result.token) {

          localStorage.setItem('token', result.token)
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([ returnUrl || '/']);
        } else {
          this.invalidLogin = true;
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
import { GraphqlService } from '../graphql/graphql.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private graphqService: GraphqlService, private tokenStorage: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    console.log('TEST THIS');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {
    const { email, password } = this.form;
    this.graphqService.login({email, password})
    .subscribe({
      next: (result: any) => {
        this.tokenStorage.saveToken(result.data.login.token);
        this.tokenStorage.saveUser(result.data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/profile']);
      },
      error: err => {
        console.log(err);
        // this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}

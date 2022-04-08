import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql/graphql.service';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  jwtToken: any;
  constructor(private graphqlService: GraphqlService, private tokenStorageService: TokenStorageService, private router: Router ) { }
  ngOnInit(): void {
    this.jwtToken = this.tokenStorageService.getToken();
    if (!!this.jwtToken){
      this.graphqlService.getUser(this.jwtToken).subscribe({
        next: (result: any) => {
          console.log(result);
          const { user } = result.data;
          this.currentUser = user;
        },
        error: err => {
          console.log(err);
          // redirect
        }
      });
    }
    // redirect
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
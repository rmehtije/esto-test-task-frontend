import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
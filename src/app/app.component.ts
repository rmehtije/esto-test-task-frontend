import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'esto-frontend';
  name?: string;
  constructor() { }
  ngOnInit(): void {
  }
}

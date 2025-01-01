import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {

bookmarks:any[]=[];

constructor(private readonly sessionStorageService:SessionStorageService) {
  let jsonStorage = this.sessionStorageService.get('bookmarks');
  
  if (jsonStorage)
  {
      this.bookmarks = JSON.parse(jsonStorage);
  }
}


}

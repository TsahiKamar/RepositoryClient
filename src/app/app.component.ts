import { SessionStorageService } from './services/session-storage.service';
import { Component, OnInit} from '@angular/core';
import { UserRequest } from './models/authenticate.model';
import { environment } from '../environments/environment';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'RepositoryClient';

  constructor(private readonly userService: UserService,private readonly sessionStorageService:SessionStorageService) {
  
    //INIT JWT TOKEN
    const req: UserRequest = {username : environment.adminUser,password : environment.pass} 
    this.userService.Authenticate(req).subscribe({
      next: (response) => {
         this.sessionStorageService.set('token',response.token);
      },
      error: (error) => {
          console.log('AuthAuthenticate error ! ');
      }
  });

  }

}

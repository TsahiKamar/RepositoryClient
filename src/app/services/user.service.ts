import { Injectable } from '@angular/core';
import { UserRequest, UserResponse } from '../models/authenticate.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string ='http://localhost:5229/repository/'; 

  constructor(private readonly httpClient: HttpClient) { }

  /* INITILIZE JWT TOKEN ON SERVER SIDE AND GET BACK TO CLIENT */
  public Authenticate(request:UserRequest): Observable<UserResponse> {    
    
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*' 
       });
    let options = { headers: headers }
    
    let methodUrl = this.url + 'authenticate'; 

    return this.httpClient.post<UserResponse>(methodUrl,request,options) 
  }

}

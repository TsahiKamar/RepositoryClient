import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IRepositoryResponse } from '../models/repositoryResponse.model';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  url: string = 'http://localhost:5229/repository/';
  token: string | null = null;
 
  constructor(private readonly httpClient: HttpClient,private readonly sessionStorageService:SessionStorageService) 
  {
    this.token = this.sessionStorageService.get('token');

  }

  /* REPOSITORY SEARCH */
  public GetRepositories(searchParam:string): Observable<IRepositoryResponse> {  
     
     //this.token = 'THIS IS A WRONG TOKEN';//401

     let headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*' ,
       'Authorization':`Bearer ${this.token}`
        });

    let options = { headers: headers }

    let params = new HttpParams();

    if (searchParam) {
      params = params.append('searchParam', searchParam);
    }

    const httpOptions = {
      params: params,
      headers: options?.headers || new HttpHeaders()
    };

    let methodUrl = this.url + 'GetRepositories?';

    return this.httpClient.get<any>(methodUrl,httpOptions)
 
  }


}

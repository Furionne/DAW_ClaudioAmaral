import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:2020/api/carteira';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
}


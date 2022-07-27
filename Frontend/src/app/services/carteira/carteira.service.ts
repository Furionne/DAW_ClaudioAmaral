import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carteira } from '../../models/carteira.model';

const baseUrl = 'http://localhost:2020/api/carteira';
@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Carteira[]> {
    return this.http.get<Carteira[]>(baseUrl);
  }
  get(codCarteira: string): Observable<any> {
    return this.http.get(`${baseUrl}/${codCarteira}`);
  }
  create(codCarteira: Carteira): Observable<any> {
    return this.http.post(baseUrl, codCarteira);
  }
  update(codCarteira: Carteira): Observable<any> {   
    return this.http.put(`${baseUrl}/${codCarteira}`, codCarteira);
  }
  delete(codCarteira: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${codCarteira}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(codCarteira: any): Observable<Carteira[]> {
    return this.http.get<Carteira[]>(`${baseUrl}?codCarteira=${codCarteira}`);
  }

  
}
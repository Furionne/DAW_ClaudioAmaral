import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cotacao } from '../../models/cotacao.model';

const baseUrl = 'http://localhost:2020/api/cotacao';
@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(baseUrl);
  }
  get(codCotacao: string): Observable<any> {
    return this.http.get(`${baseUrl}/${codCotacao}`);
  }
  create(codCotacao: Cotacao): Observable<any> {
    return this.http.post(baseUrl, codCotacao);
  }
  update(codCotacao: Cotacao): Observable<any> {   
    return this.http.put(`${baseUrl}/${codCotacao}`, codCotacao);
  }
  delete(codCotacao: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${codCotacao}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(codCotacao: any): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(`${baseUrl}?codCotacao=${codCotacao}`);
  }

  
}
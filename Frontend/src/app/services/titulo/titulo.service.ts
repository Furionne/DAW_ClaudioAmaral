import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Titulo } from '../../models/titulo.model';

const baseUrl = 'http://localhost:2020/api/titulo';
@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Titulo[]> {
    return this.http.get<Titulo[]>(baseUrl);
  }
  get(codTitulo: string): Observable<any> {
    return this.http.get(`${baseUrl}/${codTitulo}`);
  }
  create(codTitulo: Titulo): Observable<any> {
    return this.http.post(baseUrl, codTitulo);
  }
  update(codTitulo: Titulo): Observable<any> {   
    return this.http.put(`${baseUrl}/${codTitulo}`, codTitulo);
  }
  delete(codTitulo: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${codTitulo}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(codTitulo: any): Observable<Titulo[]> {
    return this.http.get<Titulo[]>(`${baseUrl}?codTitulo=${codTitulo}`);
  }

  
}
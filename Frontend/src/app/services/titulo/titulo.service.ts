import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Titulo } from '../../models/titulo.model';
import { catchError } from 'rxjs';

const baseUrl = 'http://localhost:2020/api/titulo';
@Injectable({
  providedIn: 'root',
})
export class TituloService {
  constructor(private http: HttpClient) {}
  getTitulos(): Observable<Titulo[]> {
    return this.http
      .get<Titulo[]>(baseUrl)
      .pipe(catchError(this.handleError<Titulo[]>('getTitulos', [])));
  }

  get(codTitulo: string): Observable<any> {
    return this.http.get(`${baseUrl}/${codTitulo}`);
  }
  addTitulo(codTitulo: Titulo): Observable<any> {
    return this.http
      .post(baseUrl, codTitulo)
      .pipe(catchError(this.handleError<Titulo>('addTitulo')));
  }
  updateTitulo(titulo: Titulo): Observable<any> {
    return this.http
      .put(`${baseUrl}/${titulo.codTitulo}`, titulo)
      .pipe(catchError(this.handleError<Titulo>('updateTitulo')));
  }

  deleteTitulo(codTitulo: any): Observable<any> {
    return this.http
      .delete<any>(`${baseUrl}/${codTitulo}`)
      .pipe(catchError(this.handleError<Boolean>('deleteTitulo')));
  }

  //   }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'function', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

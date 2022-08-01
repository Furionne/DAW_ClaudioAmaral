import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Cotacao } from '../../models/cotacao.model';

const baseUrl = 'http://localhost:2020/api/cotacao';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class CotacaoService {
  constructor(private http: HttpClient) {}
  getCotacaos(): Observable<Cotacao[]> {
    return this.http
      .get<Cotacao[]>(baseUrl)
      .pipe(catchError(this.handleError<Cotacao[]>('getCotacaos', [])));
  }

  // getCotacao(codCotacao: string): Observable<Cotacao> {
  //   const url = `${baseUrl}/${codCotacao}`;
  //   return this.http.get<Cotacao>(url).pipe(
  //     tap((_) => this.log()(`fetched cotacao codCotacao=${codCotacao}`)),
  //     catchError(
  //       this.handleError<Cotacao>(`getCotacao codCotacao=${codCotacao}`)
  //     )
  //   );

  get(codCotacao: string): Observable<any> {
    return this.http.get(`${baseUrl}/${codCotacao}`);
  }
  addCotacao(codCotacao: Cotacao): Observable<any> {
    return this.http
      .post(baseUrl, codCotacao)
      .pipe(catchError(this.handleError<Cotacao>('addCotacao')));
  }
  updateCotacao(cotacao: Cotacao): Observable<any> {
    return this.http
      .put(`${baseUrl}/${cotacao.codCotacao}`, cotacao)
      .pipe(catchError(this.handleError<Cotacao>('updateCotacao')));
  }

  deleteCotacao(codCotacao: any): Observable<any> {
    return this.http
      .delete<any>(`${baseUrl}/${codCotacao}`)
      .pipe(catchError(this.handleError<Boolean>('deleteCotacao')));
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

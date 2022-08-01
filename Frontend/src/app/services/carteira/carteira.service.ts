import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Carteira } from '../../models/carteira.model';
import { catchError } from 'rxjs';

const baseUrl = 'http://localhost:2020/api/carteira';
@Injectable({
  providedIn: 'root',
})
export class CarteiraService {
  constructor(private http: HttpClient) {}
  getCarteiras(): Observable<Carteira[]> {
    return this.http
      .get<Carteira[]>(baseUrl)
      .pipe(catchError(this.handleError<Carteira[]>('getCarteiras', [])));
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

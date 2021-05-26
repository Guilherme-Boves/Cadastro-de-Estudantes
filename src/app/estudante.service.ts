import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  private estudantesUrl = 'http://localhost:3000/estudantes';  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }
 
  /** GET estudantes from the server */  
  getEstudantes(): Observable<Cadastro[]> {
  return this.http.get<Cadastro[]>(this.estudantesUrl)
    .pipe(
      tap(_ => this.log('fetched estudantes')),
      catchError(this.handleError<Cadastro[]>('getEstudantes', []))
  );
}

  /** GET estudante by id. Will 404 if id not found */
  getEstudante(id: number): Observable<Cadastro> {
  const url = `${this.estudantesUrl}/${id}`;
  return this.http.get<Cadastro>(url).pipe(
    tap(_ => this.log(`fetched estudante id=${id}`)),
    catchError(this.handleError<Cadastro>(`getEstudante id=${id}`))
  );
}

  /** PUT: update the estudante on the server */
  updateEstudante(estudantes: Cadastro): Observable<any> {
    const url = `${this.estudantesUrl}/${estudantes.id}`;
    return this.http.put(url, estudantes, this.httpOptions).pipe(
    tap(_ => this.log(`updated estudante id=${estudantes.id}`)),
    catchError(this.handleError<any>('updateEstudante'))
  );
}

/** POST: add a new estudante to the server */
  addEstudante(estudantes: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.estudantesUrl, estudantes, this.httpOptions).pipe(
    tap((newEstudante: Cadastro) => this.log(`added estudante w/ id=${newEstudante.id}`)),
    catchError(this.handleError<Cadastro>('addEstudante'))
  );
}

/** DELETE: delete the estudante from the server */
deleteEstudante(id: number): Observable<Cadastro> {
  const url = `${this.estudantesUrl}/${id}`;

  return this.http.delete<Cadastro>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted estudante id=${id}`)),
    catchError(this.handleError<Cadastro>('deleteEstudante'))
  );
}

  /** Log a EstudanteService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`EstudanteService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}

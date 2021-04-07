import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SummonerDto} from './dtos';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RiotService {

  constructor(private http: HttpClient) {
  }

  findSummoner(username: string): Observable<SummonerDto> {
    const path = '/summoner/' + username;

    return this.http.get<SummonerDto>(environment.lolTpApiUrl + path);
      // .pipe(
      //   catchError(this.handleError)
      // );
  }

  private handleError(error): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      return throwError('Network or client-side error!');
    }

    return throwError(`${error.status} ${error.statusText}.\n${error.message}`);
  }
}

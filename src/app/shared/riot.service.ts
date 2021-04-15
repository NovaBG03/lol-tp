import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RiotService {

  constructor(private http: HttpClient) {
  }

  registerTeam(teamInfo): Observable<any> {
    const url = environment.lolTpApiUrl + '/register/team';
    console.log(teamInfo);
    return this.http.post(url, teamInfo)
      .pipe(
        catchError(err => {
          if (err.status === 200) {
            return of(err.message);
          }
          return throwError(err);
        })
      );
  }
}

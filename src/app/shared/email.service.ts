import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageDto} from './dtos';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class EmailService {
  constructor(private http: HttpClient) {
  }

  public askQuestion(senderName: string, senderEmail: string, message): Observable<string> {
    const body = new MessageDto(senderName, senderEmail, message);
    return this.http.post<string>(environment.lolTpApiUrl + '/email/ask', body)
      .pipe(
        catchError(err => of(`${err.status} ${err.error}`))
      );
  }
}

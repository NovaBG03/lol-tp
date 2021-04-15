import {Injectable} from '@angular/core';
import {AsyncValidatorFn} from '@angular/forms';
import {of} from 'rxjs';
import {environment} from '../../environments/environment';
import {SummonerDto} from '../shared/dtos';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LolTpValidatorService {

  profileImages = {};

  constructor(private http: HttpClient) {
  }

  summonerNameValidator(): AsyncValidatorFn {
    const that = this;
    return control => {
      const url = environment.lolTpApiUrl + '/summoner/' + control.value;
      return that.http.get<SummonerDto>(url)
        .pipe(
          map(summoner => {
            this.profileImages[control.value] = summoner.profileIconId;
            return summoner ? null : {invalidSummonerName: 'Invalid Summoner Name'};
          }),
          catchError(err => of({invalidSummonerName: 'Invalid Summoner Name'}))
        );
    };
  }
}

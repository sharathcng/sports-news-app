import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CricketMatchData } from 'src/app/models/cricketMatches.model';
import { CricketNewsData } from 'src/app/models/cricketNews.model';
import { UpcomingData } from 'src/app/models/upcoming.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

  constructor(private http: HttpClient) { }

  getCricketNewsData(): Observable<CricketNewsData> {
    return this.http.get<CricketNewsData>(environment.CricketNewsBaseUrl + "index", {
      headers: new HttpHeaders()
        .set(environment.CricketXRapidAPIHostHeaderName, environment.CricketXRapidAPIHostHeaderValue)
        .set(environment.CricketXRapidAPIHostKeyName, environment.CricketXRapidAPIHostKeyValue)
    });
  }

  getCricLiveMatchesData(): Observable<CricketMatchData> {
    return this.http.get<CricketMatchData>(environment.CricketMatchesBaseUrl + "/live", {
      headers: new HttpHeaders()
        .set(environment.CricketXRapidAPIHostHeaderName, environment.CricketXRapidAPIHostHeaderValue)
        .set(environment.CricketXRapidAPIHostKeyName, environment.CricketXRapidAPIHostKeyValue)
    });
  }

  // getCricUpcomingMatchesData(): Observable<CricketMatchData> {
  //   return this.http.get<CricketMatchData>(environment.CricketMatchesBaseUrl + "/upcoming", {
  //     headers: new HttpHeaders()
  //       .set(environment.CricketXRapidAPIHostHeaderName, environment.CricketXRapidAPIHostHeaderValue)
  //       .set(environment.CricketXRapidAPIHostKeyName, environment.CricketXRapidAPIHostKeyValue)
  //   });
  // }

  getCricUpcomingMatchesData(keyName: string): Observable<UpcomingData> {
    return this.http.get<UpcomingData>(environment.UpcomingBaseUrl + '/' + keyName, {
      headers: new HttpHeaders()
        .set(environment.CricketXRapidAPIHostHeaderName, environment.CricketXRapidAPIHostHeaderValue)
        .set(environment.CricketXRapidAPIHostKeyName, environment.CricketXRapidAPIHostKeyValue)
    });
  }

}

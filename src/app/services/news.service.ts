import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsData } from 'src/app/models/news.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsData(): Observable<NewsData> {
    return this.http.get<NewsData>(environment.newsApiBaseUrl + "sports", {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIHostKeyName, environment.XRapidAPIHostKeyValue)
    });
  }
}

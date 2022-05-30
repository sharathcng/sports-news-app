import { Component, OnInit } from '@angular/core';
import { CricketNewsData } from '../models/cricketNews.model';
import { CricketService } from '../services/cricket/cricket.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  crickNews?: CricketNewsData

  constructor(private cricketService: CricketService) { }

  ngOnInit(): void {
    this.getCricketNews()
  }

  public getCricketNews() {
    this.cricketService.getCricketNewsData()
      .subscribe({
        next: (response) => {
          this.crickNews = response
          console.log(response)
        }
      })
  }

}

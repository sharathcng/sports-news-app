import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsDetailData } from '../models/newsDetail.model';
import { CricketService } from '../services/cricket/cricket.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsDetailObj?: NewsDetailData

  constructor(private activatedRouter: ActivatedRoute, private cricketService: CricketService) {

  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {
      let id = params.get('id')
      if (id != null) {
        this.getNewsDetailObject(id)
      }
    })
  }

  getNewsDetailObject(newsId: string) {
    this.cricketService.getCricNewsDetailData(newsId)
      .subscribe({
        next: (response) => {
          this.newsDetailObj = response
          console.log(response)
        }
      })
  }

}

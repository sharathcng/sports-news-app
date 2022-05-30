import { Component, OnInit } from '@angular/core';
import { CricketMatchData } from 'src/app/models/cricketMatches.model';
import { CricketService } from 'src/app/services/cricket/cricket.service';
import { UpcomingData } from '../models/upcoming.model';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {

  upComingMatch?: UpcomingData


  constructor(private cricService: CricketService) { }

  ngOnInit(): void {
    this.getMatchList("International")
  }

  getMatchList(keyName: string) {
    this.cricService.getCricUpcomingMatchesData(keyName)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.upComingMatch = undefined
          this.upComingMatch = response
        }
      })
  }

  // getUpcomingMatchData() {
  //   this.cricService.getCricUpcomingMatchesData()
  //     .subscribe({
  //       next: (response) => {
  //         console.log(response)
  //         this.upcomingMatch = response
  //       }
  //     })
  // }

}

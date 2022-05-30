import { Component, OnInit } from '@angular/core';
import { CricketMatchData } from 'src/app/models/cricketMatches.model';
import { CricketService } from 'src/app/services/cricket/cricket.service';

@Component({
  selector: 'app-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.css']
})
export class LiveMatchesComponent implements OnInit {
  liveMatch?: CricketMatchData
  constructor(private cricService: CricketService) { }

  ngOnInit(): void {
    this.getLiveCricket()
  }

  getLiveCricket() {
    this.cricService.getCricLiveMatchesData()
      .subscribe({
        next: (response) => {
          this.liveMatch = response
          console.log(response)
        }
      })
  }

}

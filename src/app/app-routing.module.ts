import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveMatchesComponent } from './live-matches/live-matches.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'live', component: LiveMatchesComponent },
  { path: 'upcoming', component: UpcomingMatchesComponent },
  { path: 'newsDetailPage/:id', component: NewsDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import * as Data from '../../movies.json';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent implements OnInit {

  moviesData: any[] = (Data as any).default;
  isMovieFound: boolean;
  movie;

  constructor(public router: Router, private activatedRoute: ActivatedRoute) { }

  getMovieData(movieId) {
    this.isMovieFound = this.moviesData.some(movie => {
      if(movie.id === parseInt(movieId)) {
        this.movie = movie;
        return true;
      }
    })
  }

  async ngOnInit() {
    let movieId = (await this.activatedRoute.params.pipe(first()).toPromise()).id
    this.getMovieData(movieId);
  }

}

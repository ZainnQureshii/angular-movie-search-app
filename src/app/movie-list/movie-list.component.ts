import { Component, OnInit } from '@angular/core';
import * as Data from '../../movies.json';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  moviesData: any[] = (Data as any).default;
  searchText;

  constructor() { }

  ngOnInit(): void {
  }

}

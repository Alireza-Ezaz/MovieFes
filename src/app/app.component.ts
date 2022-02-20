import {Component, OnInit} from '@angular/core';
import {RequestService} from './services/request.service';
import {Movie} from './models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieFes';
  language = 'en';
  movies: Movie[];
  movieComments: string[];

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.requestService.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getMovieComments(movieId) {
    this.requestService.getComments(movieId, this.language).subscribe(
      (data: any) => {
        console.log(data);
        this.movieComments = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onLanguageChange(event) {
    this.language = event.value;
  }

}

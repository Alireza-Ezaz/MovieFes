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
  movies: Movie[];

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.requestService.getMovies().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}

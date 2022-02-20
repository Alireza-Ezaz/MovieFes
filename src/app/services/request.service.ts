import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/Movie';
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {

  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<any>('/getMovies');
  }

  getComments(movieId: number, language: string): Observable<any> {
    return this.http.get<any>('/getComments/' + movieId + '?language=' + language);
  }
}

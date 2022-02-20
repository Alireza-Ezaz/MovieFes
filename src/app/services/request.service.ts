import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
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

  uploadComment(fileToUpload: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log('formData');
    console.log(formData);
    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data');
    return this.http
      .post <HttpEvent<any>>('/uploadComment', formData, {headers: headers, reportProgress: true, observe: 'events'});
  }
}

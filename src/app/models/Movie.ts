export class Movie {
  id: number;
  name: string;
  director: number;
  poster: string;

  constructor(id: number, name: string, director: number, poster: string) {
    this.id = id;
    this.name = name;
    this.director = director;
    this.poster = poster;
  }
}

import { Injectable } from '@angular/core';
import {Movie} from "./movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movie!: Movie;

  constructor() { }

  
  movies = [
   new Movie ('The GodFather', '1972',  'Francis Ford Coppola'),
   new Movie('Millers Crossing','1990', 'The Coen Brothers'),
   new Movie('Dial M for Murder', '1954', 'Alfred Hitchcock'),
   new Movie('Whiplash', '2014', 'Damien Chazelle'),
  ]

  getMovies() {
    return this.movies;
  }
  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.movies.push(new Movie(movietitle, moviedirector, movieyear));
  }
  
}


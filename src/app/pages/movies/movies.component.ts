import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}
  ngOnInit(): void {
    this.getPagedMovies(1);
  }

  getPagedMovies(page: number) {
    this.movieService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}

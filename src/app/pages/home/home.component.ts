import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }
}

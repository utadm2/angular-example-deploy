import { Component } from '@angular/core';
import { FormMovieComponent } from '../../components/form-movie/form-movie.component';
import { ItemMovieComponent } from '../../components/item-movie/item-movie.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [FormMovieComponent, ItemMovieComponent, NgFor],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

  movies: any[] = []

  addMovie(movie: any) {
    this.movies.push(movie)
  }

}

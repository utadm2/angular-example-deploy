import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-form-movie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-movie.component.html',
  styleUrl: './form-movie.component.css'
})
export class FormMovieComponent {

  mForm = this.fb.group({
    name: ["Test", [Validators.required]],
    year: ["1900", [Validators.required]],
  })

  @Output() movie = new EventEmitter<any>();


  constructor(private fb: FormBuilder) {

  }

  sendForm() {
    console.log("Funciona!!", this.mForm.value)
    // validaciones
    // ---

    this.movie.emit(this.mForm.value)
  }
}

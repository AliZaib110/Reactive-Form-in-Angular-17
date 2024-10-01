import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'reactiveForm';
  reactiveForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(3)],
    });
  }

  getControls() {
    debugger;
    return this.reactiveForm.controls;
  }

  onSubmit(): void {
    debugger;
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
  }
}

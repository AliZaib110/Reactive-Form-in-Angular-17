import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //   title = 'reactiveForm';
  //   reactiveForm!: FormGroup;
  //   submitted: boolean = false;

  //   constructor(private formBuilder: FormBuilder) {}

  //   ngOnInit() {
  //     this.reactiveForm = this.formBuilder.group({
  //       id: [''],
  //       name: ['', Validators.required],
  //       email: ['', Validators.required, Validators.email],
  //       password: ['', Validators.required, Validators.minLength(3)],
  //     });
  //   }

  //   f() {
  //     console.log(this.reactiveForm.controls, 'controls');

  //     return this.reactiveForm.controls;
  //   }

  //   onSubmit(): void {
  //     this.submitted = true;
  //     if (this.reactiveForm.invalid) {
  //       return;
  //     }
  //   }

  title = 'reactiveForm';
  reactiveForm!: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Added email validator properly
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.reactiveForm.reset();
  }
}

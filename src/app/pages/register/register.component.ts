import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

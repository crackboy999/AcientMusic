import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;

  form: FormGroup;

  constructor(private fb: FormBuilder,
              public auth: AngularFireAuth) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }

  crearFormulario() {

    this.form = this.fb.group({
      email  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      pass   : ['', Validators.required ],
    });

  }

  login() {
    if (this.form.invalid) {
      return '';
    }
    this.auth.signInWithEmailAndPassword(this.form.controls.email.value, this.form.controls.pass.value)
      .then((resp) => {
        alert('Inicio de sesion');
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
        console.log(error);
      });
  }

}

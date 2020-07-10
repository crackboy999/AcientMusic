import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
              private auth: AngularFireAuth,
              private router: Router) {
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
        Swal.fire({
          icon: 'success',
          title: 'Login correcto',
          text: 'Bienvenido a AncientMusic',
        });
        this.router.navigate(['/inicio']);
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  }

}

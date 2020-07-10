import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private fb: FormBuilder,
              private validadores: ValidadoresService,
              private auth: AngularFireAuth,
              private router: Router) {
    this.crearFormulario();
   }

  ngOnInit(): void {}

  get nombreNoValido() {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get apellidoNoValido() {
    return this.form.get('apellido').invalid && this.form.get('apellido').touched;
  }

  get correoNoValido() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get usuarioNoValido() {
    return this.form.get('usuario').invalid && this.form.get('usuario').touched;
  }

  get pass1NoValido() {
    return this.form.get('pass1').invalid && this.form.get('pass1').touched;
  }

  get pass2NoValido() {
    const pass1 = this.form.get('pass1').value;
    const pass2 = this.form.get('pass2').value;

    return (( pass1 === pass2 ) ? false : true) || (this.form.get('pass1').invalid && this.form.get('pass1').touched);
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre  : ['', [Validators.required, Validators.minLength(5)] ],
      email   : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      usuario : ['', [Validators.required, Validators.minLength(5)] ],
      pass1   : ['', [Validators.required, Validators.minLength(6)] ],
      pass2   : ['', [Validators.required, Validators.minLength(6)] ]
    }, {
      validators: this.validadores.passwordsIguales('pass1','pass2')
    });
  }

  register() {
    if (this.form.invalid) {
      return Object.values( this.form.controls ).forEach( control => {
          control.markAsTouched();
      });
    }

    this.auth.createUserWithEmailAndPassword(this.form.controls.email.value, this.form.controls.pass1.value)
      .then(resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado',
          text: 'Seras redirigido a la pantalla de login',
        });
        this.router.navigate(['/login']);
      })
      .catch(err => {
        alert(err.message);
      });

  }

}

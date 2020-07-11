import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  newProducto: Producto;
  form: FormGroup;

  constructor(private router: Router,
              private firestore: AngularFirestore,
              private fb: FormBuilder) {
    this.crearFormulario();
               }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre      : ['', [Validators.required, Validators.minLength(5)] ],
      tipo        : ['',  Validators.required ],
      descripcion : ['', [Validators.required, Validators.minLength(5)] ],
      url         : ['', [Validators.required, Validators.minLength(6)] ],
      inventario  : ['',  Validators.required ],
      precio      : ['',  Validators.required ]
    });
  }

  saveProduct() {
    this.newProducto = {
      id: this.form.controls.nombre.value,
      nombre: this.form.controls.nombre.value,
      tipo: this.form.controls.tipo.value,
      descripcion: this.form.controls.descripcion.value,
      inventario: this.form.controls.inventario.value,
      precio: this.form.controls.precio.value,
      urlFoto: this.form.controls.url.value,
    }
    this.firestore.collection('productos').doc(this.newProducto.id).set(this.newProducto)
      .then( res => {
        Swal.fire({
          icon: 'success',
          title: 'Producto insertado',
          text: `Se ha añadido el producto ${ this.newProducto.nombre }`,
        });
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    console.log('Cerrer sesion');
    this.auth.signOut();
    this.router.navigate(['/home']);
  }

}

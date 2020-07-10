import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  constructor(private auth: AngularFireAuth) { }

  public userIsAuth(): boolean {
    if (this.auth.currentUser === null) {
      return false;
    } else {
      return true;
    }
  }
}

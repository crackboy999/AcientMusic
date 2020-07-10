import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Observable<any[]>;
  products: Array<any>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.items = this.firestore.collection('productos').valueChanges();
    this.items
    .subscribe( res => {
      this.products = res;
    });
  }

}

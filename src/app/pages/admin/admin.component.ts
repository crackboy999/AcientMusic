import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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

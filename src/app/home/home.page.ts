import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
showForm: boolean; // Variable type boolean true ou false
firebaseData = { // Objet representant ma ville
  name: '',
  img: '',
  lat: '',
  lng: '',
};
  constructor(
    public afDB: AngularFireDatabase // Variable type AngularFireDatabase pour manipuler la bdd
  ) {}

  add(){ // Fonction pour afficher le formulaire .change la valeur de showForm true en false et vis versa
    this.showForm = !this.showForm;
  }

}

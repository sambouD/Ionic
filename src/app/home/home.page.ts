import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
showForm: boolean; // Variable type boolean true ou false
firebaseData = { // Objet representant ma ville
  name: '',
  img: '',
  lat: '',
  lng: '',
};
cities: Observable<any[]>; // Variable de type observable pour recuperer les données de la base de données dynamique.

constructor(
    public afDB: AngularFireDatabase // Variable type AngularFireDatabase pour manipuler la bdd
  ) {}

  ngOnInit() {
    this.loadCities(); // On charge les données de la bdd dans cities
  }

  add(){ // Fonction pour afficher le formulaire .change la valeur de showForm true en false et vis versa
    this.showForm = !this.showForm;
  }

  addFirebase(){ // Fonction pour ajouter une ville dans la bdd
    this.afDB.list('City/').push(this.firebaseData); // Ajoute la ville dans la bdd
    this.showForm = !this.showForm; // On cache le formulaire
    this.firebaseData = {
      name: '',
      img: '',
      lat: '',
      lng: '',
    }; // On vide les champs du formulaire
  }

  loadCities(){ // Fonction pour charer les données de la bdd dans cities.
    this.cities = this.afDB.list('City/').valueChanges(); // Recupere les données de la bdd
  }

}


import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Environment, GoogleMap, GoogleMaps, GoogleMapsMapTypeId } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
currentCity = { // Recupere les données de la ville courante
  name: '',
  lat: 0,
  lng: 0,
};
map: GoogleMap;
  constructor(
    public afDB: AngularFireDatabase,
    public route: ActivatedRoute,
    private platform: Platform
  ) {
    this.currentCity.name = this.route.snapshot.paramMap.get('name'); // Recupere le nom de la ville
    this.currentCity.lat = parseFloat(this.route.snapshot.paramMap.get('lat')); // Recupere la latitude de la ville
    this.currentCity.lng = parseFloat(this.route.snapshot.paramMap.get('lng')); // Recupere la longitude de la ville
   }

  ngOnInit() {
    if(this.platform.is('cordova')){
      this.loadMap();
    }
  }

  loadMap(){
    Environment.setEnv({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDFsnZXBhqhRll7tQ9l1z6LJciAaZyBBMA',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDFsnZXBhqhRll7tQ9l1z6LJciAaZyBBMA'
    });
    this.map =  GoogleMaps.create('map_canvas', { // Créer la carte
      mapType: GoogleMapsMapTypeId.NORMAL, // Type de carte
      camera: { // Position de la camera
        target: {
          lat: this.currentCity.lat, // Latitude de la ville
          lng: this.currentCity.lng // Longitude de la ville
        },
        zoom: 12, // Zoom de la camera
        tilt:30 // Angle de la camera
      }
    });

  }


}

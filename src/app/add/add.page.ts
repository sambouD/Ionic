import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {


cityDataLogement = {
  title: '',
  lat: 0,
  lng: 0,
  price: '',
  type: '',
  img: ''
};

  constructor(public afDB: AngularFireDatabase,
    public modaController: ModalController,
    public navParams: NavParams) {

        this.cityDataLogement.lat = this.navParams.get('lat');
        this.cityDataLogement.lng = this.navParams.get('lng');

  }

  ngOnInit() {
  }

  close(){
    this.modaController.dismiss();
  }

}

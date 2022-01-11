import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCtyAvbsX2NSdxa88rAN0WgXD3JUadk5fo',
  authDomain: 'airbnb-43b6d.firebaseapp.com',
  projectId: 'airbnb-43b6d',
  storageBucket: 'airbnb-43b6d.appspot.com',
  messagingSenderId: '1077470327527',
  appId: '1:1077470327527:web:ee43252c5adc8104fc2842',
  measurementId: 'G-9K4L5J7Z0L'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

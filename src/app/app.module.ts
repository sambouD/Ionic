import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD3Y16WqwGnHuovaY-eqBGfaKOagFpDkFk',
  authDomain: 'airbnmap-b8e11.firebaseapp.com',
  projectId: 'airbnmap-b8e11',
  storageBucket: 'airbnmap-b8e11.appspot.com',
  messagingSenderId: '806767130318',
  appId: '1:806767130318:web:4285cec5e6d07ba803429f',
  measurementId: 'G-5MDS70QVRB'
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

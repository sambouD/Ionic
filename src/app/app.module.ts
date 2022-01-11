import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: 'AIzaSyATLRK4RdLdSddYaXShDWMG1jD8Wf3-7Do',
  authDomain: 'airbnb-66f3f.firebaseapp.com',
  projectId: 'airbnb-66f3f',
  storageBucket: 'airbnb-66f3f.appspot.com',
  messagingSenderId: '597889455535',
  appId: '1:597889455535:web:e2d39e9a74e842bcddcb5a',
  measurementId: 'G-NP3RNB8E6P'
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


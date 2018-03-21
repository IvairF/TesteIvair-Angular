
import { PedidosPage } from './../pages/pedidos/pedidos';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, Events,  LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrincipalPage } from '../pages/principal/principal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  loader;
  profilePicture;


  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public _alertCtrl: AlertController,
    public events: Events
    
  
) {

  
    this.initializeApp();

    this.rootPage = PedidosPage;
      
  }  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = PedidosPage;    
    });
  }
}

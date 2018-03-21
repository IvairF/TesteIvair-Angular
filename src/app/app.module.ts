import { Events } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PedidosService } from '../pages/pedidos/pedidos.service';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import 'rxjs/add/operator/map';

import { PrincipalPage } from './../pages/principal/principal';
import { PedidosPage } from './../pages/pedidos/pedidos';

import { IonicStorageModule } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';


import { ActionSheet } from '@ionic-native/action-sheet';

import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { Health } from '@ionic-native/health';

import {DatePicker} from '@ionic-native/date-picker';
import { GooglePlus } from '@ionic-native/google-plus';


@NgModule({
  declarations: [
    MyApp,   
    PrincipalPage,  
    PedidosPage 
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,     
    PedidosPage    
  ],

  providers: [
    StatusBar,
    SplashScreen,
    ActionSheet,
    PedidosService  
  ]
})
export class AppModule { }
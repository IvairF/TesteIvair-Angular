import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private menuCtrl: MenuController) {

   this.menuCtrl.enable(true, 'sideMenu');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html'
})
export class PedidosPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private service: PedidosService,
    private loadingCtrl: LoadingController,
    public navParams: NavParams) {

  }
  
  public pedidos;

  ionViewWillEnter() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      spinner: 'circles'
    });
    loader.present();
    this.service.buscarPedidos().toPromise()
      .then(result => {
        this.pedidos = result;
        loader.dismiss();
      }).catch(() => {
        console.log(loader);
        loader.dismiss();
      });
  }
 
  }

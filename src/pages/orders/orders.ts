import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-list',
  templateUrl: 'orders.html'
})


export class OrdersPage {
  icons: string[];
  items: Array<{title: string, icon: string, status: boolean}>;
  numMesas: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

  }


}

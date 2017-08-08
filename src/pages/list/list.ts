import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class MesasPage {
  icons: string[];
  items: Array<{title: string, icon: string, status: boolean}>;
  numMesas: number;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    this.icons = ['ios-restaurant'];
    this.items = []; 
    this.storage.length().then(result => { this.numMesas = result});
    this.storage.length().then(result => { 
      for (let i = 1; i < result; i++) {
        this.storage.get('Mesa '+ i).then(result => { this.items.push({title: 'Mesa ' + i, icon: this.icons[0], status: result })});
    }});
    

  }

  changeStatus(i: number){
    this.items[i].status = !this.items[i].status;
    this.storage.set(this.items[i].title, this.items[i].status); 
  }
  
  addMesa(){
    
    this.items.push({
      title: 'Mesa ' + String(this.numMesas + 1),
      icon: this.icons[0],
      status: true
    });
    this.storage.set(this.items[this.numMesas].title, this.items[this.numMesas].status);
    this.numMesas = this.numMesas + 1;
    
  }

  removeMesa(){
    this.items.pop();
    this.storage.remove('Mesa ' + this.numMesas);
    if (this.numMesas >= 1){
      this.numMesas = this.numMesas - 1;
    }  
  }


}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LogInHelperPage } from '../log-in-helper/log-in-helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  helperPush() {
    this.navCtrl.push(LogInHelperPage);
  }

  coordinatorPush() {
    this.navCtrl.push(LogInHelperPage);
  }

}
